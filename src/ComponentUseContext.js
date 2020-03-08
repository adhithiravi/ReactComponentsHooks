// This component is written to demonstrate the useContext Hook.
import React, { useContext } from "react";

const blogInfo = {
  React: {
    post: "Learn useContext Hooks",
    author: "Adhithi Ravichandran"
  },
  GraphQL: {
    post: "Learn GraphQL Mutations",
    author: "Adhithi Ravichandran"
  }
};

const blogInfoContext = React.createContext(blogInfo);

function ParentComponent() {
  return (
    <blogInfoContext.Provider value={blogInfo}>
      <h2>Use Context Example Component</h2>
      <BlogDetailComponent />
      <MyOtherBlogInfoComponent />
    </blogInfoContext.Provider>
  );
}

function BlogDetailComponent() {
  const blogDetails = useContext(blogInfoContext);

  return (
    <div>
      <h3>React Blog Details</h3>
      <p>Topic: {blogDetails.React.post}</p>
      <p>Author: {blogDetails.React.author}</p>
    </div>
  );
}

function MyOtherBlogInfoComponent() {
  const blogDetails = useContext(blogInfoContext);

  return (
    <div>
      <h3>GraphQL Blog Details</h3>
      <p>Topic: {blogDetails.GraphQL.post}</p>
      <p>Author: {blogDetails.GraphQL.author}</p>
    </div>
  );
}

export default ParentComponent;
