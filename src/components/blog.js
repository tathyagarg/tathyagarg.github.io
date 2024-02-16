import React, {Component} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Waves from "../waves-1.svg";

const MainDiv = styled.div`
    height: 100vh;
    background-color: #50bf5c;
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

const BlogView = styled.div`
    height: 100%;
    width: 100%;
    border: red solid 1px;
    display: block;
`

class BlogSection extends Component {
    render() {
        return (
            <section>
                <img src={Waves} alt="Waves" style={{marginTop: "0", width: "100%", position: "absolute"}}></img>
                <MainDiv>
                    <Header>Blog</Header>
                    <Blogs>
                        {/* These BlogViews will be automated to get their contents from a function */}
                        <BlogView>
                            <h1>Hi</h1>
                        </BlogView>
                        <BlogView>
                            <h1>Hi</h1>
                        </BlogView>
                        <BlogView>
                            <h1>Hi</h1>
                        </BlogView>
                        <BlogView>
                            <h1>Hi</h1>
                        </BlogView>
                    </Blogs>
                </MainDiv>
            </section>
        )
    }
}

export default BlogSection