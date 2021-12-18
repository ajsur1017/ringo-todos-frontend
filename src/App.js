// Import our components
import AllPosts from "./pages/AllPosts";
import SinglePost from "./pages/SinglePost";
import Form from "./pages/Form";

// import React Hooks
import { useState, useEffect } from "react";

// Import React Router Components
import { Route, Switch } from "react-router-dom";

function App(props) {
  ////////////
  // Style Objects
  ///////////

  const h1 = {
    textAlign: "center",
    margin: "10px",
  };

  //////////////////
  // State & Other Variables
  //////////////////

  //api url
  const url = "https://am-ringo-todos-backend.herokuapp.com/todos/";

  // state to hold list of todos
  const [posts, setPosts] = useState([]);

  ///////////////
  // Functions
  ////////////////

  const getTodos = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setPosts(data)
  }

  ///////////////
  // useEffects
  ///////////////
  // make the api call when the component
  // loads only the first time
  useEffect(() => {
    getTodos()
  }, [])

  /////////////////
  // Returned JSX
  /////////////////
  return (
    <div className="App">
      <h1 style={h1}>My Todo List</h1>
      <Switch>
        {/* INDEX PAGE */}
        <Route
          exact
          path="/"
          render={(rp) => {
            return <AllPosts {...rp} posts={posts} />;
          }}
        />
        {/* SHOW PAGE */}
        <Route
          path="/post/:id"
          render={(rp) => {
            return <SinglePost {...rp} posts={posts} />;
          }}
        />
        {/* NEW AND EDIT FORM PAGES */}
        <Route
          path="/new"
          render={(rp) => {
            return <Form {...rp} />;
          }}
        />
        <Route
          path="/edit"
          render={(rp) => {
            return <Form {...rp} />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
