import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import restaurantList from "../utils/mockData";

// 2.Body component
const Body = ()=>{
    const [ListofRestuarants, setListofRestuarants] = useState(restaurantList);

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredRestaurants = ListofRestuarants.filter((res)=> res.info.avgRating > 4.3);
                    setListofRestuarants(filteredRestaurants);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="restaurant-container">
                {ListofRestuarants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
};

export default Body;