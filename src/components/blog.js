import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Waves from "../waves-1.svg";

const MainDiv = styled.div`
    height: 100vh;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
`

const Header = styled.h1`
    font-size: 75px;
    font-weight: 200;
    margin-top: 1.5em;
    position: absolute;
`

const Blogs = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 50px;
    grid-row-gap: 50px;
    margin-top: 15rem;
    height: 70%;
    width: 70%;
`

function BlogView({contents}) {
    const [head, date, color, tag] = contents;

    return (
        <div style={{height: "100%", width: "100%", border: "red solid 1px", display: "block", backgroundColor: color, borderRadius: "0.5em"}}>
            <div style={{margin: "2rem"}}>
                <div style={{backgroundColor: "pink", display: "inline-block", height: "fit-content", borderRadius: "1em"}}>
                    <p style={{margin: "10px"}}>{tag}</p>
                </div>
                <h1>{head}</h1>
                <p>{date}</p>
            </div>
        </div>
    )
}

function BlogSection() {
    const content1 = blog1_contents();
    const content2 = blog2_contents();
    const content3 = blog3_contents();
    const content4 = blog4_contents();

    return (
        <section>
            <img src={Waves} alt="Waves" style={{marginTop: "0", width: "100%", position: "absolute"}}></img>
            <MainDiv>
                <Header>Blog</Header>
                <Blogs>
                    {/* These BlogViews will be automated to get their contents from a funciton */}
                    <BlogView contents={content1}/>
                    <BlogView contents={content2}/>
                    <BlogView contents={content3}/>
                    <BlogView contents={content4}/>
                </Blogs>
            </MainDiv>
        </section>
    )
}

function blog1_contents() {
    return ["wasgood", "yestreday", "#ff0000", "bean"]
}

function blog2_contents() {
    return ["wasgood", "yestreday", "#ff0000", "bean"]
}

function blog3_contents() {
    return ["wasgood", "yestreday", "#ff0000", "bean"]
}

function blog4_contents() {
    return ["wasgood", "yestreday", "#ff0000", "bean"]
}

export default BlogSection