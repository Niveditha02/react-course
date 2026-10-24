import React from "react";
import ReactDOM from "react-dom/client";


// app will have following files
// - Header : logo, nav items
// - body : search, RestaurantContainer, restaurantCard : name, logo, rating, cuisines, delivery time, delivery time
// - Footer : Copyright, links, address, contact

// 1 Header component
const HeadingComponent = () => {
    return (
        <div className="header">
            <div className = "logo">
                <img src={new URL("./images/logo.jpeg", import.meta.url).href} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) =>{
    console.log(props);
    return(
        <div className ="restaurant-card">
            <img className="restaurant-logo"    
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcM6fNVPYfVOc-J9qIZsiXlJ8PEB2mZ-G3XMg_FSutLg&s=10" alt="Restaurant-Meghana Foods" />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.4 stars</h4>
            <h5>30 mins</h5>
        </div>
    )
}
// 2.Body component
const Body = ()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
        <div className="restaurant-container">
            {/* Restaurant cards will be rendered here */}
            <RestaurantCard
             resName="Meghana Food" cuisine="Biriyani, North Indian, Asian"/>
            <RestaurantCard resName="KFC" cuisine="Burger, Fast Food"/>
            <RestaurantCard resName="Mcdonalds" cuisine="Burger, Fast Food"/>
        </div>
        </div>
    )
}

const AppLayout = () => {
    return(
        <div className="app">
            <HeadingComponent />
            <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);