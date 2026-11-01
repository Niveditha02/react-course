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

export default RestaurantCard;