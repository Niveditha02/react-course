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
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
      Referer: "https://www.swiggy.com/",
      Origin: "https://www.swiggy.com",
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
      const menuUrl =
        `https://www.swiggy.com/dapi/menu/pl?` +
        `page-type=REGULAR_MENU&complete-menu=true&lat=12.9753&lng=77.591&` +
        `restaurantId=${encodeURIComponent(restaurantId)}&catalog_qa=undefined&submitAction=ENTER`;
      const menu = await getSwiggyJson(menuUrl);
      response.writeHead(200).end(JSON.stringify(menu));
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

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.log(
      `Port ${port} is already in use. A proxy server instance is already running!`
    );
  } else {
    console.error("Proxy server error:", err);
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Swiggy API proxy running at http://localhost:${port}`);
});