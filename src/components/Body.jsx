import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";

// 2.Body component
const Body = ()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="restaurant-container">
                {restaurantList.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    )
};

export default Body;