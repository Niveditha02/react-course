import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { restaurantList, mockMenuData } from "../utils/mockData";

const CDN_IMG_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";

function RestaurantMenuPage() {
  const { id, resId } = useParams();
  const routeId = id || resId;
  // If no ID or dummy "1234", default to "981134" (Gochick)
  const restaurantId = !routeId || routeId === "1234" ? "981134" : routeId;

  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [vegOnly, setVegOnly] = useState(false);

  useEffect(() => {
    fetchRestaurantMenu();
  }, [restaurantId]);

  const fetchRestaurantMenu = async () => {
    setLoading(true);
    try {
      // 1. Fetch restaurant header info from mockData
      const foundRestaurant = restaurantList.find(
        (res) => String(res?.info?.id) === String(restaurantId)
      );
      const resInfo = foundRestaurant?.info || restaurantList[0]?.info;
      setRestaurantInfo(resInfo);

      // 2. Fetch restaurant menu items from mockData
      const items =
        mockMenuData[String(restaurantId)] || mockMenuData["default"];
      setMenuItems(items);
    } catch (err) {
      console.error("Error loading menu from mock data:", err);
    } finally {
      setLoading(false);
    }
  };

  // Filter Veg / All
  const displayedItems = vegOnly
    ? menuItems.filter(
        (item) =>
          item?.card?.info?.isVeg === 1 || item?.card?.info?.isVeg === true
      )
    : menuItems;

  if (loading) {
    return (
      <div style={{ maxWidth: "800px", margin: "40px auto", padding: "16px" }}>
        <div
          style={{
            height: "140px",
            backgroundColor: "#f3f4f6",
            borderRadius: "12px",
            marginBottom: "24px",
          }}
        />
        <div
          style={{
            height: "80px",
            backgroundColor: "#f3f4f6",
            borderRadius: "8px",
            marginBottom: "16px",
          }}
        />
        <div
          style={{
            height: "80px",
            backgroundColor: "#f3f4f6",
            borderRadius: "8px",
            marginBottom: "16px",
          }}
        />
      </div>
    );
  }

  const {
    name = "Restaurant Menu",
    cuisines = [],
    costForTwoMessage = "₹350 for two",
    avgRating = "4.2",
    totalRatingsString = "1K+",
    sla = {},
  } = restaurantInfo || {};

  return (
    <div
      className="restaurantMenuPage"
      style={{
        maxWidth: "850px",
        margin: "24px auto",
        padding: "0 20px 60px",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Top Navigation */}
      <div style={{ marginBottom: "16px" }}>
        <Link
          to="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            color: "#e53e3e",
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "14px",
          }}
        >
          ← Back to all restaurants
        </Link>
      </div>

      {/* Restaurant Header Card */}
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          padding: "24px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
          border: "1px solid #edf2f7",
          marginBottom: "28px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div>
            <h1
              style={{
                margin: "0 0 8px",
                fontSize: "26px",
                color: "#1a202c",
              }}
            >
              {name}
            </h1>
            <p
              style={{
                margin: "0 0 8px",
                color: "#718096",
                fontSize: "14px",
              }}
            >
              {Array.isArray(cuisines) ? cuisines.join(", ") : cuisines}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                fontSize: "14px",
                color: "#4a5568",
              }}
            >
              <span>⏱️ {sla?.deliveryTime || 30} mins</span>
              <span>•</span>
              <span>💰 {costForTwoMessage}</span>
            </div>
          </div>

          <div
            style={{
              padding: "8px 12px",
              backgroundColor: avgRating >= 4 ? "#38a169" : "#dd6b20",
              color: "#fff",
              borderRadius: "8px",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            ★ {avgRating}
            <div
              style={{
                fontSize: "10px",
                fontWeight: "normal",
                opacity: 0.9,
              }}
            >
              {totalRatingsString}
            </div>
          </div>
        </div>
      </div>

      {/* Menu Filters */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
          borderBottom: "2px solid #edf2f7",
          paddingBottom: "12px",
        }}
      >
        <h2 style={{ margin: 0, fontSize: "20px", color: "#2d3748" }}>
          Recommended ({displayedItems.length})
        </h2>

        <button
          onClick={() => setVegOnly(!vegOnly)}
          style={{
            padding: "6px 14px",
            backgroundColor: vegOnly ? "#e6fffa" : "#f7fafc",
            color: vegOnly ? "#234e52" : "#4a5568",
            border: vegOnly ? "1.5px solid #38b2ac" : "1.5px solid #cbd5e0",
            borderRadius: "20px",
            fontSize: "13px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          {vegOnly ? "🌱 Pure Veg Only ✓" : "🌱 Pure Veg Only"}
        </button>
      </div>

      {/* Items List */}
      <div className="menu-items-container">
        {displayedItems.length === 0 ? (
          <p
            style={{
              textAlign: "center",
              color: "#a0aec0",
              padding: "40px 0",
            }}
          >
            No items available in this category.
          </p>
        ) : (
          displayedItems.map((item, idx) => {
            const info = item?.card?.info;
            if (!info) return null;

            const rawPrice = info?.price || info?.defaultPrice || 19900;
            const price =
              rawPrice > 1000 ? Math.round(rawPrice / 100) : rawPrice;
            const isItemVeg = info?.isVeg === 1 || info?.isVeg === true;
            const rating = info?.ratings?.aggregatedRating?.rating;

            return (
              <div
                key={info?.id || idx}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "20px 0",
                  borderBottom: "1px solid #edf2f7",
                  gap: "24px",
                }}
              >
                {/* Item Details */}
                <div style={{ flex: 1 }}>
                  {/* Veg / Non-veg dot */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "14px",
                      height: "14px",
                      border: isItemVeg
                        ? "1.5px solid #38a169"
                        : "1.5px solid #e53e3e",
                      borderRadius: "3px",
                      marginBottom: "6px",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: isItemVeg ? "#38a169" : "#e53e3e",
                      }}
                    />
                  </div>

                  <h3
                    style={{
                      margin: "0 0 6px",
                      fontSize: "17px",
                      color: "#2d3748",
                    }}
                  >
                    {info?.name}
                  </h3>

                  <p
                    style={{
                      margin: "0 0 8px",
                      fontSize: "15px",
                      fontWeight: "700",
                      color: "#1a202c",
                    }}
                  >
                    ₹{price}
                  </p>

                  {rating && (
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#2f855a",
                        fontWeight: "bold",
                        marginBottom: "8px",
                      }}
                    >
                      ★ {rating}
                    </div>
                  )}

                  {info?.description && (
                    <p
                      style={{
                        margin: 0,
                        fontSize: "13px",
                        color: "#718096",
                        lineHeight: "1.5",
                        maxWidth: "520px",
                      }}
                    >
                      {info?.description}
                    </p>
                  )}
                </div>

                {/* Item Image and Add Button */}
                <div
                  style={{
                    position: "relative",
                    width: "120px",
                    height: "120px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flexShrink: 0,
                  }}
                >
                  {info?.imageId ? (
                    <img
                      src={`${CDN_IMG_URL}${info.imageId}`}
                      alt={info?.name}
                      style={{
                        width: "120px",
                        height: "96px",
                        objectFit: "cover",
                        borderRadius: "12px",
                      }}
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: "120px",
                        height: "96px",
                        backgroundColor: "#f7fafc",
                        borderRadius: "12px",
                        border: "1px dashed #cbd5e0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "28px",
                      }}
                    >
                      🍽️
                    </div>
                  )}

                  <button
                    style={{
                      position: "absolute",
                      bottom: "0px",
                      backgroundColor: "#ffffff",
                      color: "#38a169",
                      border: "1.5px solid #cbd5e0",
                      padding: "6px 20px",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: "700",
                      cursor: "pointer",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                    onClick={() => alert(`Added ${info?.name} to cart!`)}
                  >
                    ADD
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default RestaurantMenuPage;
