import React from "react";
import ReactDOM from "react-dom/client";

// JSX => Parcel transpiles react code => Reactelement => ReactElement - JS Object => HTML element (render)


const JSXElement = <h1 id="heading">Namste React</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(JSXElement);