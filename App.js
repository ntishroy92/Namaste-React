import React from 'react';
import ReactDOM from 'react-dom/client';

// var heading = React.createElement("div",{id:"parent"},
// [React.createElement("div",{id:"child1"},
// [React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")]),
// React.createElement("div",{id:"child2"},
// [React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")])
// ]);
// var root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

 const JsxHeading =( 
  <h3>Namaste React using JSX</h3>
  );

 var root = ReactDOM.createRoot(document.getElementById("root"));
 const Title = ()=><h1 className='heading'>This is JSX using functional component</h1>;
 const HeadingComponent =()=>(
    <div>
       <Title/>
       {JsxHeading}
        <p>This is heading from functional component </p>
    </div>
 );
 root.render(<HeadingComponent/>);