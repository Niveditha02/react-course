import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

function RestaurantCard({ resData }) {
    const info = resData.info ?? resData;
    return (
        <Link className="restaurant-card-link" to={`/restaurant/${info.id}`}>
            <div className="restaurant-card">
                <img
                    className="restaurant-logo"
                    src={`${CDN_URL}${info.cloudinaryImageId}`}
                    alt={info.name}
                />
                <h3>{info.name}</h3>
                <h4>{info.cuisines.join(" , ")}</h4>
                <h4>{info.avgRating}</h4>
                <h4>{info.costForTwo}</h4>
                <h4>{info.sla.deliveryTime} minutes</h4>
            </div>
        </Link>
    );
}

export default RestaurantCard;