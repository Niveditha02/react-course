import { createServer } from "node:http";

const port = 3001;
const restaurantsUrl =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9753&lng=77.591&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null";
const dishSearchUrl =
  "https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.97530&lng=77.59100&str=pizzas&trackingId=eda7bf3c-1843-39c0-cbfa-8d71b8757ca6&submitAction=ENTER&queryUniqueId=d3565ef3-83fe-3da4-40af-267a6700e578";

const getSwiggyJson = async (url) => {
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "User-Agent": "Mozilla/5.0",
    },
  });

  if (!response.ok) {
    throw new Error(`Swiggy request failed (${response.status})`);
  }

  return response.json();
};

const server = createServer(async (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.setHeader("Content-Type", "application/json");

  if (request.method === "OPTIONS") {
    response.writeHead(204).end();
    return;
  }

  if (request.method !== "GET") {
    response.writeHead(405).end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  try {
    const path = new URL(request.url, `http://${request.headers.host}`).pathname;

    if (path === "/api/restaurants") {
      const restaurants = await getSwiggyJson(restaurantsUrl);
      response.writeHead(200).end(JSON.stringify(restaurants));
      return;
    }

    const menuMatch = path.match(/^\/api\/menu\/([^/]+)$/);
    if (menuMatch) {
      const restaurantId = decodeURIComponent(menuMatch[1]);
      const [restaurantJson, dishJson] = await Promise.all([
        getSwiggyJson(restaurantsUrl),
        getSwiggyJson(dishSearchUrl),
      ]);
      const restaurant = restaurantJson.data.cards
        .flatMap((item) => {
          const info = item?.card?.card?.info;
          return info ? [info] : [];
        })
        .find((info) => String(info.id) === restaurantId);
      const groupedCard = dishJson.data.cards.find((card) => card.groupedCard)?.groupedCard;
      const dishCards = groupedCard?.cardGroupMap?.DISH?.cards ?? [];
      const matchingCards = dishCards.filter(({ card }) => {
        const menuCard = card.card;
        return String(menuCard.restaurant?.info?.id) === restaurantId;
      });
      const items = matchingCards.flatMap(({ card }) => {
        const menuCard = card.card;

        return (menuCard.dishes ?? [])
          .filter((dish) => dish.info)
          .map(({ info }) => ({
            ...info,
            restaurantName: menuCard.restaurant.info.name,
          }));
      });

      response
        .writeHead(200)
        .end(JSON.stringify({ restaurant, items }));
      return;
    }

    response.writeHead(404).end(JSON.stringify({ error: "Not found" }));
  } catch (error) {
    console.error("Local Swiggy proxy error:", error);
    response
      .writeHead(502)
      .end(JSON.stringify({ error: "Could not load data from Swiggy" }));
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Swiggy API proxy running at http://localhost:${port}`);
});
