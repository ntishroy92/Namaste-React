var heading = React.createElement("div",{class:"parent"},
[React.createElement("div",{class:"child1"},
[React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")]),
React.createElement("div",{class:"child2"},
[React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")])
]);
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);