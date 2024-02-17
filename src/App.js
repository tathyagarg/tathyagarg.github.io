import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages";
import Portfolio from "./pages/portfolio";
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
          <Route exact path="/portfolio" element={<Portfolio/>}/>
          <Route exact path="/aboutme" element={<AboutMe/>}/>
          {
            get_all_components().map( (post, index) => {
              return <Route exact key={index} path={post["path"]} element={
                <DynamicBlog title={post["title"]} contents={post["contents"]||"ABCDEF"} tags={post["tag"]} date={post["date"]}/>
              }/>
            })
          }
        </Routes>
      </Router>
    )
  }
}

export default App;