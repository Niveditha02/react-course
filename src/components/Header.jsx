import {imageUrl} from "../utils/constants";
import {useState} from "react";
const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    return (
        <div className="header">
            <div className = "logo">
                <img src={imageUrl} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <button className="login" onClick={()=>{setBtnNameReact("Logout")}}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;
