/**
 * <div id="parent">
 *   <div id="child">
 *   <h1></h1>
 *  </div>
 * </div>
 */

const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"}, [   
    React.createElement("h1",{},"I am h1 tag"),
    React.createElement("h2",{},"I am h2 tag"),
]),
React.createElement("div",{id:"child2"},[
    React.createElement("h1",{},"I am h1 tag"),
    React.createElement("h2",{},"I am h2 tag"),
    ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// below line const heading is an object which is used to create a react element
// const heading = React.createElement("h1",{id: "heading", xyz: "abc"},"Namaste React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// // render method is responsible to convert object into heading tag
// root.render(heading);