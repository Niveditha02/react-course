import {imageUrl} from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="flex justify-between bg-pink-300 ">
            <div className = "logo">
                <img className="w-30" src={imageUrl} alt="logo" />
            </div>
            <div className="flex item-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About</Link></li>
                    <li className="px-4"><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    )
};

export default Header;
