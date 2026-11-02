import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


// app will have following files
// - Header : logo, nav items
// - body : search, RestaurantContainer, restaurantCard : name, logo, rating, cuisines, delivery time, delivery time
// - Footer : Copyright, links, address, contact


const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);