import React, { useReducer } from "react";

const initialState = { react: false, graphQL: false, angular: false };

const coursesReducer = (state, action) => {
  switch (action.type) {
    case "REACT":
      return { react: true };
    case "GRAPHQL":
      return { graphQL: true };
    case "ANGULAR":
      return { angular: true };

    default:
      throw new Error();
  }
};

const Courses = () => {
  const [state, dispatch] = useReducer(coursesReducer, initialState);

  const handleReactPress = () => {
    dispatch({ type: "REACT" });
  };

  const handleGraphQLPress = () => {
    dispatch({ type: "GRAPHQL" });
  };

  const handleAngularPress = () => {
    dispatch({ type: "ANGULAR" });
  };

  return (
    <div className="box">
      <h2>Use Reducer Example Component</h2>
      <p>
        Learning{" "}
        {state.react
          ? "React"
          : state.graphQL
          ? "GraphQL"
          : state.angular
          ? "Angular"
          : "Not Started"}
      </p>
      <div>
        <button
          type="button"
          onClick={handleReactPress}
          className="button is-grey"
        >
          React
        </button>
        <button
          type="button"
          onClick={handleGraphQLPress}
          className="button is-dark"
        >
          GraphQL
        </button>
        <button
          type="button"
          onClick={handleAngularPress}
          className="button is-grey"
        >
          Angular
        </button>
      </div>
    </div>
  );
};

export default Courses;
