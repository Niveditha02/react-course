import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

function RestaurantCard({ resData }) {
    const info = resData.info ?? resData;
    return (
        <Link className="block h-full" to={`/restaurant/${info.id}`}>
            <div className="w-full h-full p-3 bg-amber-100">
                <img
                    className="block w-full h-36 object-cover"
                    src={`${CDN_URL}${info.cloudinaryImageId}`}
                    alt={info.name}
                />
                <h3 className="font-bold py-4 text-xl">{info.name}</h3>
                <h4>{info.cuisines.join(" , ")}</h4>
                <h4>{info.avgRating}</h4>
                <h4>{info.costForTwo}</h4>
                <h4>{info.sla.deliveryTime} minutes</h4>
            </div>
        </Link>
    );
}

export default RestaurantCard;