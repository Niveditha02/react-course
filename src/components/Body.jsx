import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9753&lng=77.591&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const json = await data.json();
        const restaurants = (json?.data?.cards ?? []).flatMap((item) => {
            const info = item?.card?.card?.info;
            return info ? [{ info }] : [];
        });
        console.log(restaurants);
        setListOfRestaurant(restaurants);
        setFilteredRestaurant(restaurants);
    };

    return listOfRestaurant.length === 0 ? (
        <p>Loading restaurants...</p>
    ) : (
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
                            const filteredRestaurants = listOfRestaurant.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurant(filteredRestaurants);
                        }}
                    >
                        Search
                    </button>
                </div>
                <button
                    onClick={() => {
                        const topRestaurants = listOfRestaurant.filter(
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
