import React from "react";
import ReactDOM from "react-dom/client";

// React component
const Title = () => {
    return <h1 className="heading">Namaste React using JSX</h1>;
}
const HeadingComponent = () => {
    return (
        <div className="container">
            <Title />
            <h1>Namaste React Functional Component</h1>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);