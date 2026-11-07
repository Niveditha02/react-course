import RestaurantCard from "./RestaurantCard";
import { useState, useEffect} from "react";
import Shimmer from "./shimmer";
import restaurantList from "../utils/mockData";

// 2.Body component
const Body = ()=>{
    const [ListofRestuarants, setListofRestuarants] = useState(restaurantList);

    // useEffect(()=>{
    //     fetchData();
    // },[]);

    // console.log("Body rendered");

    // // Fetch the data from API
    // const fetchData = async()=> {
    //     const data = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9753&lng=77.591&str=dinner&trackingId=undefined&submitAction=ENTER&queryUniqueId=0d870831-1af4-c2a3-e923-ebb761db08b4&facets=%7B%22VEG_IDENTIFIER%22%3A%5B%7B%22id%22%3A%22NONVEG%22%2C%22operator%22%3A%22EQ%22%2C%22label%22%3A%22Non-Veg%22%7D%5D%7D&selectedPLTab=DISH");
    //     const json = await data.json();
    //     console.log(json);
    //     // optional chaining is used to avoid errors if any of the properties are undefined 
    //     setListofRestuarants(json?.data?.cards[2]?.data?.data?.cards);
    // }

    if(ListofRestuarants.length === 0){
        return <Shimmer />
    }

// using ternary operator to check if the list of restaurants is empty, if yes then show shimmer else show the list of restaurants  
    return ListofRestuarants.length === 0 ? <Shimmer/> : (
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