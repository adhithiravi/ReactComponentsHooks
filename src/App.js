import React from "react";
import ContextComponent from "./ComponentUseContext";
import ReducerComponent from "./ComponentUseReducer.js";

const renderReducerHook = () => {
  console.log("Reducer hook pressed");
  return <ReducerComponent />;
};

const renderContextHook = () => {
  console.log("Context hook pressed");
  return <ContextComponent />;
};

const App = () => {
  return (
    <div className="box">
      {renderReducerHook()}
      {renderContextHook()}
    </div>
  );
};

export default App;
