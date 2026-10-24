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

const RestaurantCard = ({resData}) =>{
    const info = resData.data.info;
    return(
        <div className ="restaurant-card">
            <img className="restaurant-logo"    
            src={`https://media-assets.swiggy.com/swiggy/image/upload/${info.cloudinaryImageId}`} alt={info.name}/>
            <h3>{info.name}</h3>
            <h4>{info.cuisines.join(" , ")}</h4>
            <h4>{info.avgRating}</h4>
            <h4>{info.costForTwo / 100}</h4>
            <h4>{info.sla.deliveryTime}minutes</h4>
        </div>
    )
}

const resObj = {
type : "restaurant",
data:{
info: {
id: "981134",
name: "Gochick By Imperio",
city: "1",
slugs: {
restaurant: "gochick-btm-btm",
city: "bangalore"
},
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/25/e1d39ab3-de1c-444c-9aab-88926849ebf3_981134.jpg",
address: "Shop No : No.7 , Floor : G Floor , Gochick Koramangala Opp.to NEXUS Mall, Korama , ",
locality: "5th Block",
areaName: "BTM",
costForTwo: "30000",
costForTwoMessage: "₹300 FOR TWO",
cuisines: [
"Burgers",
"Fast Food",
"Rolls & Wraps",
"Salads",
"Desserts",
"Beverages"
],
avgRating: 4.2,
feeDetails: { },
parentId: "481855",
avgRatingString: "4.2",
totalRatingsString: "1.2K+",
promoted: true,
adTrackingId: "cid=599b2fe6-ed7a-4879-99b4-c3b5dbdce2d4~p=0~adgrpid=599b2fe6-ed7a-4879-99b4-c3b5dbdce2d4#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=981134~plpr=SEARCH#RESTAURANT_WITH_ITEMS~st=burgers~eid=f1808fa2-aa9a-4794-82d6-3f61225d8ae9~srvts=1792818215247",
sla: {
deliveryTime: 48,
minDeliveryTime: 45,
maxDeliveryTime: 50,
lastMileTravel: 7,
serviceability: "SERVICEABLE",
rainMode: "RAIN_MODE_NONE",
slaString: "45-50 MINS",
lastMileTravelString: "7.0 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
opened: true,
restaurantClosedMeta: { }
},
aggregatedDiscountInfo: {
visible: true
},
badges: { },
aggregatedDiscountInfoV2: {
visible: true
},
ratingSlab: "RATING_SLAB_5",
orderabilityCommunication: {
title: { },
subTitle: { },
message: { },
customIcon: { },
commsStyling: { }
},
cartOrderabilityNudgeBanner: {
parameters: { },
presentation: { }
},
externalRatings: {
aggregatedRating: {
rating: "--"
}
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
featuredSectionInfo: { },
campaignId: "599b2fe6-ed7a-4879-99b4-c3b5dbdce2d4",
showEoOffer: true
},
analytics: {
screenName: "explore",
objectValue: "981134",
impressionObjectName: "impression_RIG-ad",
clickObjectName: "click-dish-search-full-menu-ad"
},
ctaWithParams: {
link: "swiggy://menu",
type: "DEEPLINK",
params: {
restaurant_id: "981134",
query: "Burgers",
sourceSessionId: "ucy3d00ed41-39f0-410e-911d-89f75ff16",
source: "SEARCH",
isSld: "false",
sourceRequestId: "00000000000000000000000000000000",
qrEnabled: "false",
widgetId: "searchRIGWidget"
}
}
}
};

// 2.Body component
const Body = ()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
        <div className="restaurant-container">
            {/* Restaurant cards will be rendered here */}
            <RestaurantCard
             resData={resObj}/> 
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