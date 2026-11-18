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
        "https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.97530&lng=77.59100&str=pizzas&trackingId=eda7bf3c-1843-39c0-cbfa-8d71b8757ca6&submitAction=ENTER&queryUniqueId=d3565ef3-83fe-3da4-40af-267a6700e578"
      );
      const json = await data.json();
      

      // Log the raw response so you can inspect the full JSON tree
      console.log("Full API Response:", json);
      setListMenu(json.data);

      // Locate the groupedCard block in search results
    //   const groupedCard = json?.data?.cards?.find((c) => c?.groupedCard)?.groupedCard;

      // Extract dish search cards (each item contains card.card.info & card.card.restaurant.info)
    //   const dishCards = groupedCard?.cardGroupMap?.DISH?.cards ?? [];

    //   const restaurantsMenu = dishCards
    //     .map((item) => ({
    //       dishInfo: item?.card?.card?.info,
    //       restaurantInfo: item?.card?.card?.restaurant?.info,
    //     }))
    //     .filter((item) => item.dishInfo);

    //   setListMenu(restaurantsMenu);
    //   setFilteredRestaurant(restaurantsMenu);
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