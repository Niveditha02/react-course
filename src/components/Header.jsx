import {imageUrl} from "../utils/constants";
const Header = () => {
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
                </ul>
            </div>
        </div>
    )
};

export default Header;
