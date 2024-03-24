import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages";
import AboutMe from "./pages/aboutme";
import DynamicBlog from "./components/dynamic_blog";
import data from "./blog_contents.json"

function get_all_components() {
  const items = [];
  for (let component of data) {
    items.push(component)
  }
  return items;
}

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/aboutme" element={<AboutMe/>}/>
          {
            get_all_components().map( (post, index) => {
              return <Route exact key={index} path={"/"+post["title"]+"-"+post["date"]} element={
                <DynamicBlog title={post["title"]} tag={post["tag"]} date={post["date"]} contents={post["contents"]}/>
              }/>
            })
          }
        </Routes>
      </Router>
    )
  }
}

export default App;