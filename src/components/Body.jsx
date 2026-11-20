import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3001/api/restaurants");
            if (!response.ok) throw new Error(`Request failed (${response.status})`);

            const json = await response.json();
            const restaurants = (json?.data?.cards ?? []).flatMap((item) => {
                const info = item?.card?.card?.info;
                return info ? [{ info }] : [];
            });
            setListOfRestaurant(restaurants);
            setFilteredRestaurant(restaurants);
        } catch (error) {
            console.error("Could not load restaurants:", error);
            setError("Could not load restaurants. Start the proxy with npm run proxy.");
        }
    };

    if (error) return <p role="alert">{error}</p>;

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