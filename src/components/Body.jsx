import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";

const Body = () => {
    const [filteredRestaurant, setFilteredRestaurant] = useState(restaurantList);
    const [searchText, setSearchText] = useState("");

    return (
        <div className="container body">
            <div className="filter-btn flex m-4 p-4">
                <div className="search ">
                    <input
                        type="text"
                        className="border border-solid border-black"
                        value={searchText}
                        onChange={(event) => setSearchText(event.target.value)}
                    />
                    <button
                        className="px-2 bg-green-100 m-4 border border-solid border-black"
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
                <button className="flex bg-blue-300 m-4 border border-solid border-black"
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {filteredRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;
