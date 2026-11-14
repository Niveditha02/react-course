import User from './User';
import UserClass from './UserClass';

const About = () => {
    return(
        <div>
            <h1>About Us</h1>
            <p>This is a food delivery app that allows users to order food from their favorite restaurants and have it delivered to their doorstep. The app provides a convenient and efficient way for users to browse menus, place orders, and track deliveries in real-time.</p>
            {/* <User name={"Niveditha"} /> */}
            <UserClass name={"Niveditha"} />
        </div>
    )
}

export default About;