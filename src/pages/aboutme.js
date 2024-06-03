import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import styles from '../css/aboutme.module.css'

const BackLink = styled(Link)`
    text-decoration: none;
    color: black;
    display: block;
    transform: translate(5vh, 100%);
    width: 4em;

    &:hover {
        text-decoration: underline;
    }
`

const Parent = styled.div`
    background-color: #91ff9d;
    height: 150vh;
    width: 100vw;
    position: absolute;
    background-image:
        linear-gradient(to right, rgba(100, 255, 170, 10) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(100, 255, 170, 10) 1px, transparent 1px);
    background-size: 2.5rem 2.5rem;
    background-position: center center;
`

const ProjectLink = styled.a`
    color: black;
    font-weight: 600;
    font-size: 30px;
    text-decoration: underline;
`

const Project1 = styled.div`
    height: 70vh;
    width: 49%;
    background-color: #b1aadd;
    border-radius: 0.5em;
    padding: 2%;
    border: 0.25em #d2bbff solid;
    box-sizing: border-box;
`

const Project2 = styled.div`
    height: 34.5vh;
    width: 98%;
    background-color: #b1aadd;
    margin-bottom: 1vh;
    border-radius: 0.5em;
    padding: 2%;
    box-sizing: border-box;
    border: 0.25em #d2bbff solid;
`

const AboutMe = () => {
    return <Parent>
        <BackLink to={"/"}>
                &lt;- Back
        </BackLink>
        <div style={{backgroundColor: "white", height: "90%", width: "60vw", marginLeft: "20vw", marginTop: "1vh", marginBottom: "5vh", borderRadius: "1em", border: "0.25em #dbd3d3 solid"}}>
            <div style={{width: "50vw", marginLeft: "5vw", paddingTop: "1%"}}>
                <h1 style={{textAlign: "center", fontSize: "50px"}}>
                    Hi, I'm Tathya
                </h1>
                <div>
                    <p>
                        I've been coding for around 4 years, and in that time have primarily used Python. In recent years, I've tried to dive into using lower level languages like C, Rust, and a bit of toying around with C++.
                    </p>
                    <h2 style={{fontSize: "40px"}}>
                        Projects
                    </h2>
                    Most of the projects I've made this year are open-sourced and their code is available to view on my GitHub <ProjectLink href="https://github.com/tathyagarg" style={{fontSize: "16px"}}>here</ProjectLink>
                    <div style={{marginTop: "2vh"}}>
                        <Project1 style={{float: "left"}}>
                            <ProjectLink href="href://github.com/tathyagarg/wikibot">Wikibot</ProjectLink>
                            <p>
                                Wikibot is a chatbot that uses Natural Language Processing (NLP) to understand the focus of queries, and tries to construct sentences from data scraped from a few websites. Of course, the sentences aren't very good and often don't make much sense due to the limited data it has to go off of.
                            </p>
                            <img src={require("../assets/wikibot-demo.png")} height="50%"></img>
                        </Project1>
                        <div style={{float: "right", width: "50%"}}>
                            <Project2>
                                <ProjectLink href="https://github.com/tathyagarg/tathyagarg.github.io">Portfolio Website</ProjectLink>
                                <p>
                                    This website was made primarily using React.js. The blog section of this website dynamically creates webpages from stored data. Might migrate to using an API though.
                                </p>
                                <img src={require("../assets/website-demo.png")} height="50%"></img>
                            </Project2>
                            <Project2>
                                <ProjectLink href="https://github.com/tathyagarg/seaturtle_menu">Seaturtle Menu</ProjectLink>
                                <p>
                                    Seaturtle Menu is a library for Python to help developers make terminal menus quickly. It includes features like menus in menus, customizable bullets, and many more soon to come!
                                </p>
                            </Project2>
                        </div>
                    </div>
                    <div style={{height: "2vh"}}></div>
                    <div>
                        <h2 style={{fontSize: "40px"}}>
                            Tech Stack
                        </h2>
                        <p>
                            Here are my skills in descending order of mastery:
                        </p>
                        <ol>
                            <li>Python</li>
                            <li>HTML, CSS, and React.js</li>
                            <li>C and C++</li>
                            <li>Rust</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </Parent>
}

export default AboutMe;