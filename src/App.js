import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Register from "./components/Users/Register/Register";
import Login from "./components/Users/Login/Login";
import NavBar from "./components/NavBar/";
import AddCategory from "./components/Categories/AddCategory";
import Category from "./components/Categories/Category";
import CreatePost from "./components/Posts/CreatePost";
import ProtectedRoute from "./components/NavBar/ProtectedRoute/ProtectedRoute";
import PostDetails from "./components/Posts/PostDetails";
import Profile from "./components/Users/Profile/Profile";
import UpdateBio from "./components/Users/Profile/UpdateBio";

import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/profile/:id" component={Profile} />
        <ProtectedRoute exact path="/add-category" component={AddCategory} />
        <ProtectedRoute exact path="/category/:id" component={Category} />
        <ProtectedRoute exact path="/create-post/:id" component={CreatePost} />
        <ProtectedRoute exact path="/posts/:id" component={PostDetails} />
        <ProtectedRoute exact path="/update-bio" component={UpdateBio} />
      </Switch>
    </Router>
  );
}

export default App;
