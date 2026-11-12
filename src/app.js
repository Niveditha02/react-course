import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router";
import About from "./components/About";
import Contact from "./components/contact";
import Error from "./components/Error";
import RestaurantMenuPage from "./components/RestaurantMenuPage";


// app will have following files
// - Header : logo, nav items
// - body : search, RestaurantContainer, restaurantCard : name, logo, rating, cuisines, delivery time, delivery time
// - Footer : Copyright, links, address, contact


const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:[
        {
            path: "/",
            element: <Body />,
            ErrorElement: <Error />

        },
        {
        path: "/about",
        element: <About />,
        ErrorElement: <Error />
    },
    {
        path: "/contact",
        element: <Contact/>,
        ErrorElement: <Error />
    },
    {
        path: "/restaurant/:id",
        element: <RestaurantMenuPage />,
        ErrorElement: <Error />
    }
    ],
        ErrorElement: <Error />
    },
    
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={AppRouter} />);