import { useEffect, useState } from "react";

const RestaurantMenuPage = () => {
  const [listofMenu, setListMenu] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9753&lng=77.591&restaurantId=570511&catalog_qa=undefined&submitAction=ENTER"
      );
      const json = await data.json();
      

      // Log the raw response so you can inspect the full JSON tree
      console.log("Full API Response:", json);
      setListMenu(json.data);

      // Locate the groupedCard block in search results
      const groupedCard = json?.data?.cards?.find((c) => c?.groupedCard)?.groupedCard;

      // Extract dish search cards (each item contains card.card.info & card.card.restaurant.info)
      const dishCards = groupedCard?.cardGroupMap?.DISH?.cards ?? [];

      const restaurantsMenu = dishCards
        .map((item) => ({
          dishInfo: item?.card?.card?.info,
          restaurantInfo: item?.card?.card?.restaurant?.info,
        }))
        .filter((item) => item.dishInfo);

      setListMenu(restaurantsMenu);
      setFilteredRestaurant(restaurantsMenu);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  return listofMenu === 0 ? (
    <p>Loading....</p>):(
    <div className="restuarant-menu">
        {/* <h1>{listofMenu?.data.cards[]}</h1> */}
      {/* {filteredRestaurant.map((item, index) => (
        <div key={item?.dishInfo?.id || index} className="menu-card">
          <h4>{item?.dishInfo?.name}</h4>
          <p>₹{(item?.dishInfo?.price || item?.dishInfo?.defaultPrice) / 100}</p>
          <small>Restaurant: {item?.restaurantInfo?.name}</small>
        </div>
      ))} */}

    </div>
  );
};

export default RestaurantMenuPage;