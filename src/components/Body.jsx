import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

// 2.Body component
const Body = ()=>{
    let  ListofRestuarants = [
        {
            id: "981134",
            name: "Gochick By Imperio",
            city: "1",
            restaurant: "gochick-btm-btm",
            city: "bangalore",
           cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/25/e1d39ab3-de1c-444c-9aab-88926849ebf3_981134.jpg",
           address: "Shop No : No.7 , Floor : G Floor , Gochick Koramangala Opp.to NEXUS Mall, Korama , ",
           locality: "5th Block",
           areaName: "BTM",
           costForTwo: "30000",
           cuisines: [ "Burgers", "Fast Food", "Rolls & Wraps", "Salads", "Desserts", "Beverages"],
           avgRating: 3.6,
           deliveryTime: 28,
        },
        {
           id: "981135",
           name: "Wendy's Burgers",
           city: "1",
           restaurant: "gochick-btm-btm",
           city: "bangalore",
           cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2026/9/14/4a522456-eab5-4c82-9537-033df3e4c6b6_1377757.jpg",
           address: "Shop No : No.7 , Floor : G Floor , Gochick Koramangala Opp.to NEXUS Mall, Korama , ",
           locality: "5th Block",
           areaName: "BTM",
           costForTwo: "30000",
           cuisines: [ "Burgers", "Fast Food", "Rolls & Wraps", "Salads", "Desserts", "Beverages"],
           avgRating: 4.2,
           deliveryTime: 58,

        }
    ]

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    ListofRestuarants = ListofRestuarants.filter((res)=> res.avgRating > 4);
                    console.log(ListofRestuarants);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="restaurant-container">
                {ListofRestuarants.map((ListofRestuarants) => (
                    <RestaurantCard key={ListofRestuarants.id} resData={ListofRestuarants} />
                ))}
            </div>
        </div>
    )
};

export default Body;