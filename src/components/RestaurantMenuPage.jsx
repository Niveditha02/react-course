import {useEffect, useState} from "react";

const RestaurantMenuPage = () => {
    useEffect(() => {
        // fetch menu data from API
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const data = await fetch('https://corsproxy.io/?' +"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9753&lng=77.591&restaurantId=1090275&catalog_qa");
            const json = await data.json();
            const menu = (json?.data?.cards[3] ? json.data.cards[3] : []).flatMap((item) => {
            const info = item?.card?.card?.info;
            return info ? [{ info }] : [];
        });
            console.log(menu);
        } catch (error) {
            console.error("Error fetching menu:", error);
        }
    }

    return(
        <div className="restuarant-menu">
            <h1>Name of Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biriyani</li>
                <li>Pizzas</li>
                <li>Burgers</li>
            </ul>
        </div>
    )
}

export default RestaurantMenuPage;