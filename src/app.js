import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


// app will have following files
// - Header : logo, nav items
// - body : search, RestaurantContainer, restaurantCard : name, logo, rating, cuisines, delivery time, delivery time
// - Footer : Copyright, links, address, contact

// 1 Header component

function RestaurantCard({ resData }) {
    const info = resData.info;
    return (
        <div className="restaurant-card">
            <img className="restaurant-logo"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/${info.cloudinaryImageId}`} alt={info.name} />
            <h3>{info.name}</h3>
            <h4>{info.cuisines.join(" , ")}</h4>
            <h4>{info.avgRating}</h4>
            <h4>{info.costForTwo / 100}</h4>
            <h4>{info.sla.deliveryTime} minutes</h4>
        </div>
    );
}

const resObj = {
type : "restaurant",
restaurantGochick: {
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
info: {
id: "1377757",
name: "Big Bad Burger",
city: "1",
slugs: {
restaurant: "big-bad-burger-central-bangalore-central-bangalore",
city: "bangalore"
},
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2026/9/14/4a522456-eab5-4c82-9537-033df3e4c6b6_1377757.jpg",
address: "NO.4 & 16, ST MARKS ROAD BANGALORE, ,Shani nagara,B.B.M.P East,Karnataka-560001",
locality: "St Marks Road",
areaName: "Central Bangalore",
costForTwo: "50000",
costForTwoMessage: "₹500 FOR TWO",
cuisines: [
"American",
"Burgers",
"Fast Food",
"Desserts",
"Snacks"
],
avgRating: 4.2,
feeDetails: { },
parentId: "784936",
avgRatingString: "4.2",
totalRatingsString: "37",
promoted: true,
adTrackingId: "cid=ca8fffa7-94b3-44f3-a5ac-d8b4e9f2bfc2~p=2~adgrpid=ca8fffa7-94b3-44f3-a5ac-d8b4e9f2bfc2#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1377757~plpr=SEARCH#RESTAURANT_WITH_ITEMS~st=burgers~eid=17162e1b-37d7-4cdd-8283-4d6afc9bc9bc~srvts=1793033773048",
sla: {
deliveryTime: 28,
minDeliveryTime: 25,
maxDeliveryTime: 30,
lastMileTravel: 1.9,
serviceability: "SERVICEABLE",
rainMode: "RAIN_MODE_NONE",
slaString: "25-30 MINS",
lastMileTravelString: "1.9 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
opened: true,
restaurantClosedMeta: { }
},
aggregatedDiscountInfo: {
visible: true
},
badges: {
imageBadges: [
{
imageId: "newg.png",
description: "Premium gourmet restaurant offering an elevated, high-quality food experience."
}
]
},
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
campaignId: "ca8fffa7-94b3-44f3-a5ac-d8b4e9f2bfc2",
showEoOffer: true
},
restaurantWendys: {
id: "953489",
name: "Wendy's Burgers",
city: "1",
slugs: {
restaurant: "wendys-burgers-richmond-town-central-bangalore",
city: "bangalore"
},
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/abe687dd-c957-4a15-86b2-9136210a5d93_953489.JPG",
address: "Plot No.50, Stall No.7, St Marks Road, Shanthala Nagar, Ashok Nagar, Richmond Town Ward, No.111, Shivajinagara, B.B.M.P East, Bangalore, Karnataka",
locality: "Ashok Nagar",
areaName: "St. Marks Road",
costForTwo: "75000",
costForTwoMessage: "₹750 FOR TWO",
cuisines: [
"Burgers",
"Fast Food",
"wrap"
],
avgRating: 4.6,
feeDetails: { },
parentId: "972",
avgRatingString: "4.6",
totalRatingsString: "1.8K+",
sla: {
deliveryTime: 25,
minDeliveryTime: 20,
maxDeliveryTime: 25,
lastMileTravel: 2,
serviceability: "SERVICEABLE",
rainMode: "RAIN_MODE_NONE",
slaString: "20-25 MINS",
lastMileTravelString: "2.0 km",
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
rating: "4.6",
ratingCount: "376"
},
source: "GOOGLE",
sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
featuredSectionInfo: { },
showEoOffer: true
},
analytics: {
screenName: "explore",
objectValue: "953489",
impressionObjectName: "impression_RIG",
clickObjectName: "click-dish-search-full-menu"
},
restaurantBobsBar: {
id: "1060334",
name: "Bob's Bar",
city: "1",
slugs: {
restaurant: "bob's-bar-jp-nagar-jp-nagar",
city: "bangalore"
},
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/10/531e22bd-6275-4e93-ae06-594ffcdbb7ab_1060334.jpg",
address: "10, Wood St, Ashok Nagar, Bengaluru, Karnataka 560025",
locality: "Ashok Nagar",
areaName: "Wood Street",
costForTwo: "100000",
costForTwoMessage: "₹1000 FOR TWO",
cuisines: [
"Biryani",
"Desserts",
"South Indian",
"Bakery"
],
avgRating: 4.3,
feeDetails: { },
parentId: "10956",
avgRatingString: "4.3",
totalRatingsString: "862",
promoted: true,
adTrackingId: "cid=b419f3f4-a94d-431a-aacb-3b1c64ad70dc~p=3~adgrpid=b419f3f4-a94d-431a-aacb-3b1c64ad70dc#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1060334~plpr=SEARCH#RESTAURANT_WITH_ITEMS~st=burgers~eid=38c57c35-c207-4c04-a5ea-66b17e778674~srvts=1793033773048",
sla: {
deliveryTime: 26,
minDeliveryTime: 20,
maxDeliveryTime: 25,
lastMileTravel: 2.8,
serviceability: "SERVICEABLE",
rainMode: "RAIN_MODE_NONE",
slaString: "20-25 MINS",
lastMileTravelString: "2.8 km",
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
campaignId: "b419f3f4-a94d-431a-aacb-3b1c64ad70dc",
showEoOffer: true
},
restaurantMcDonalds: {
id: "43836",
name: "McDonald's",
city: "1",
slugs: {
restaurant: "mcdonalds-kasturba-road-central-bangalore",
city: "bangalore"
},
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/18/06ff4c44-9050-468a-8188-fc7f7adee87b_43836.JPG",
address: "Hardcastle Restaurants Pvt Ltd, No. 10, India Garage, Opp. Cubbon Park police Station, Near BPCL Petrol pump, Kasturba Road, Bengaluru - 560001",
locality: "MG Road",
areaName: "Ashok Nagar",
costForTwo: "40000",
costForTwoMessage: "₹400 FOR TWO",
cuisines: [
"Burgers",
"Beverages",
"Cafe",
"Desserts"
],
avgRating: 4.2,
feeDetails: { },
parentId: "630",
avgRatingString: "4.2",
totalRatingsString: "27K+",
sla: {
deliveryTime: 26,
minDeliveryTime: 20,
maxDeliveryTime: 25,
lastMileTravel: 1.8,
serviceability: "SERVICEABLE",
rainMode: "RAIN_MODE_NONE",
slaString: "20-25 MINS",
lastMileTravelString: "1.8 km",
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
showEoOffer: true
},
restaurantFatSmash: {
id: "1123568",
name: "Fat Smash - Burgers, Sides & Pies",
city: "1",
slugs: {
restaurant: "fat-smash-indiranagar-indiranagar",
city: "bangalore"
},
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/16/29f8d042-bc30-4c7c-90bb-4ff32112ce64_1123568.jpg",
address: "Landmark: Next to Berger Paint Shop on CMH Rd Fat Smash, 1st Floor 2,20th cross, Chinmaya Mission Hospital Rd, Halasuru, Laksmipuram, Indiranagar, Bengaluru, Karnataka 560008, Bangalore East, Bangalore Urban, Karnataka - 560008",
locality: "Laksmipuram",
areaName: "Indiranagar",
costForTwo: "60000",
costForTwoMessage: "₹600 FOR TWO",
cuisines: [
"American",
"Fast Food",
"Burgers"
],
avgRating: 4.5,
feeDetails: { },
parentId: "681819",
avgRatingString: "4.5",
totalRatingsString: "1.1K+",
promoted: true,
adTrackingId: "cid=31b36628-aaed-4dcd-8df9-7b21819d507e~p=4~adgrpid=31b36628-aaed-4dcd-8df9-7b21819d507e#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1123568~plpr=SEARCH#RESTAURANT_WITH_ITEMS~st=burgers~eid=6e7e6b0f-6f58-4710-a437-ef6164226c4f~srvts=1793033773048",
sla: {
deliveryTime: 46,
minDeliveryTime: 40,
maxDeliveryTime: 50,
lastMileTravel: 5.7,
serviceability: "SERVICEABLE",
rainMode: "RAIN_MODE_NONE",
slaString: "40-50 MINS",
lastMileTravelString: "5.7 km",
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
campaignId: "31b36628-aaed-4dcd-8df9-7b21819d507e",
showEoOffer: true
},
restaurantEasybites: {
id: "279735",
name: "Easybites By Empire",
city: "1",
slugs: {
restaurant: "easy-bites-central-bangalore-central-bangalore",
city: "bangalore"
},
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/18/55e32997-f921-4cb5-9f43-56ee5888683d_279735.JPG",
address: "No.35,Castel Street,Bangalore-560025,District-B.B.M.P East,STATE-Karnataka",
locality: "Castel Street",
areaName: "Ashok Nagar",
costForTwo: "15000",
costForTwoMessage: "₹150 FOR TWO",
cuisines: [
"Burgers",
"sandwich",
"Fast Food",
"Beverages",
"Rolls & Wraps"
],
avgRating: 4.4,
feeDetails: { },
parentId: "443171",
avgRatingString: "4.4",
totalRatingsString: "7.5K+",
sla: {
deliveryTime: 27,
minDeliveryTime: 20,
maxDeliveryTime: 25,
lastMileTravel: 2.8,
serviceability: "SERVICEABLE",
rainMode: "RAIN_MODE_NONE",
slaString: "20-25 MINS",
lastMileTravelString: "2.8 km",
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
showEoOffer: true
},
restaurantGoodFlippin: {
id: "967970",
name: "Good Flippin' Burgers",
city: "1",
slugs: {
restaurant: "good-flippin-burgers-central-bangalore-central-bangalore",
city: "bangalore"
},
cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/8/85df9313-c5a8-4b09-9a68-e9fee6e0e751_967970.JPG",
address: "Shop No : NA , Floor : 0 , Church Street, Off Brigade Road, Bangalore , ",
locality: "Church Street",
areaName: "Central Bangalore",
costForTwo: "60000",
costForTwoMessage: "₹600 FOR TWO",
cuisines: [
"Burgers",
"American",
"Fast Food",
"Beverages",
"Wraps",
"Coffee"
],
avgRating: 4.5,
feeDetails: { },
parentId: "11748",
avgRatingString: "4.5",
totalRatingsString: "854",
sla: {
deliveryTime: 28,
minDeliveryTime: 25,
maxDeliveryTime: 30,
lastMileTravel: 2.5,
serviceability: "SERVICEABLE",
rainMode: "RAIN_MODE_NONE",
slaString: "25-30 MINS",
lastMileTravelString: "2.5 km",
iconType: "ICON_TYPE_EMPTY"
},
availability: {
opened: true,
restaurantClosedMeta: { }
},
aggregatedDiscountInfo: {
visible: true
},
badges: {
imageBadges: [
{
imageId: "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
description: "Top-rated for Burger, based on user votes."
},
{
imageId: "newg.png",
description: "Premium gourmet restaurant offering an elevated, high-quality food experience."
}
]
},
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
rating: "4.7",
ratingCount: "1.0K+"
},
source: "GOOGLE",
sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
},
ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
featuredSectionInfo: { },
showEoOffer: true
},
};

const restaurantList = [
    { info: resObj.restaurantGochick },
    { info: resObj.restaurantWendys },
    { info: resObj.restaurantBobsBar },
    { info: resObj.restaurantMcDonalds },
    { info: resObj.restaurantFatSmash },
    { info: resObj.restaurantEasybites },
    { info: resObj.restaurantGoodFlippin },
];



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