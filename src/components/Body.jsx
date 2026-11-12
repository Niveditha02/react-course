import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";

const Body = () => {
    const [filteredRestaurant, setFilteredRestaurant] = useState(restaurantList);
    const [searchText, setSearchText] = useState("");

    return (
        <div className="container body">
            <div className="filter-btn">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        value={searchText}
                        onChange={(event) => setSearchText(event.target.value)}
                    />
                    <button
                        className="searchBtn"
                        onClick={() => {
                            const filteredRestaurants = restaurantList.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurant(filteredRestaurants);
                        }}
                    >
                        Search
                    </button>
                </div>
                <button className="filter-btn"
                    onClick={() => {
                    const topRestaurants = restaurantList.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setFilteredRestaurant(topRestaurants);
                    }}
                >
                    Top Restaurants
                </button>
            </div>
            <div className="restaurant-container">
                {filteredRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;
