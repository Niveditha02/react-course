import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CDN_URL } from "../utils/constants";

const RestaurantMenuPage = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetchRestaurantMenu();
  }, [id]);

  const fetchRestaurantMenu = async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(`http://localhost:3001/api/menu/${id}`);
      if (!response.ok) throw new Error(`Request failed (${response.status})`);

      const { restaurant, items } = await response.json();
      setRestaurant(restaurant);
      setMenuItems(items);
    } catch (fetchError) {
      console.error("Could not load restaurant menu:", fetchError);
      setError("Could not load the menu. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <p>Loading menu...</p>;
  }

  if (error) {
    return <p role="alert">{error}</p>;
  }

  return (
    <main>
      {restaurant?.cloudinaryImageId && (
        <img
          src={`${CDN_URL}${restaurant.cloudinaryImageId}`}
          alt={restaurant.name}
          width="240"
        />
      )}
      <h1>{restaurant?.name ?? "Restaurant"}</h1>
      {restaurant?.cuisines?.length > 0 && (
        <p>{restaurant.cuisines.join(", ")}</p>
      )}
      {restaurant?.avgRating != null && <p>Rating: {restaurant.avgRating}</p>}
      {restaurant?.costForTwo && <p>{restaurant.costForTwo}</p>}
      {restaurant?.sla?.deliveryTime && (
        <p>{restaurant.sla.deliveryTime} minutes</p>
      )}
      <h2>Menu</h2>
      <section aria-label="Menu items">
        {menuItems.length === 0 ? (
          <p>No matching dishes found for this restaurant.</p>
        ) : menuItems.map((item, index) => {
          const price = item.price ?? item.defaultPrice;

          return (
            <article key={item.id ?? `${item.name}-${index}`}>
              <h2>{item.name}</h2>
              {item.restaurantName && <p>{item.restaurantName}</p>}
              {item.description && <p>{item.description}</p>}
              {price != null && <p>₹{(price / 100).toFixed(2)}</p>}
              <hr />
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default RestaurantMenuPage;