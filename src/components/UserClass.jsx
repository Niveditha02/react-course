import React from 'react';


class UserClass extends React.Component {
    constructor(props) {
        super(props);
        // state in class component is an object
        console.log(props);

        this.state = {
        userInfo: {
            name: "Dummy Name",
            location: "Dummy Location"
        }
    }
    }


    

    async componentDidMount() {
        const response = await fetch("https://api.github.com/users/niveditha02");
        const data = await response.json();
        console.log(data);
        this.setState({userInfo:data});
        console.log("Component Mounted");
    }

    componentDidUpdate(){
        console.log("Component Did update");
    }

   
    render() {
        const {name, location,avatar_url} = this.state.userInfo;
        return(
            <div className="User">
                {/* inherit state */}
                <img src={avatar_url}/>
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h3>Contact: @niveditha</h3>
            </div>
        )
    }

}
export default UserClass;