import {useState} from "react";

const User = (props) => {
    const [count] = useState(0);
    return(
        <div className="user">
            <h2>Count : {count}</h2>
            <h2>Name: {props.name}</h2>
            <h2>Location: Mangalore</h2>
            <h3>Contact: @niveditha</h3>
        </div>
    )
};

export default User;