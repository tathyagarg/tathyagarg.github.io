import React from "react";
import AboutMeSection from "../components/aboutme.js"
import PortfolioSection from "../components/portfolio.js";
import BlogSection from "../components/blog.js";
import HobbiesSection from "../components/hobbies.js";

const Home = () => {
    return (
        <div className="page">
            <AboutMeSection/>
            <BlogSection/>
            <PortfolioSection/>
            <HobbiesSection/>
        </div>
    )
}

export default Home;