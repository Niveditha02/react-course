import { CDN_URL } from "../utils/constants";
function RestaurantCard({ resData }) {
    const info = resData.info ?? resData;
    return (
        <div className="restaurant-card">
            <img className="restaurant-logo"
                src={`${CDN_URL}${info.cloudinaryImageId}`} alt={info.name} />
            <h3>{info.name}</h3>
            <h4>{info.cuisines.join(" , ")}</h4>
            <h4>{info.avgRating}</h4>
            <h4>{info.costForTwo / 100}</h4>
            <h4>{info.deliveryTime } minutes</h4>
        </div>
    );
}

export default RestaurantCard;