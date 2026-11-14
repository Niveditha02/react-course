import React from 'react';


class UserClass extends React.Component {
    constructor(props) {
        super(props);
        // state in class component is an object
        this.state = {
            count : 0,
        };
        console.log(props);
    }
    componentDidMount() {
        console.log("Component Mounted");
    }

    render() {
        return(
            <div className="User">
                {/* inherit state */}
                <button onClick={() => this.setState({count: this.state.count + 1})}>Increment</button>
                <h1>Count : {this.state.count}</h1>
                <h2>Name: {this.props.name}</h2>
                <h2>Location: Mangalore</h2>
                <h3>Contact: @niveditha</h3>
            </div>
        )
    }

}
export default UserClass;