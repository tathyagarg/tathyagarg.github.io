import React, {Component} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const IntroductionLink = styled(Link)`
    text-decoration: none;
    color: black;
    margin: 0px;
    font-weight: 200;
    font-size: 100px;
    display: block;
    transition-duration: 500ms;

    &:hover {
        font-size: 120px;
        transition-duration: 500ms;
    }
`

const SocialLink = styled.a`
    text-decoration: none;
    font-size: 20px;
    color: black;
    margin-left: 5vw;
    margin-right: 5vw;

    &:hover {
        text-decoration: underline;
    }
`

const Section = styled.section`
    background-color: #91ff9d;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image:
        linear-gradient(to right, rgba(100, 255, 170, 10) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(100, 255, 170, 10) 1px, transparent 1px);
    background-size: 2.5rem 2.5rem;
    background-position: center center;

    &:after {
        content:""; 
        position: absolute; 
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(145, 255, 157, 1) 100%);
        height: 10%;
    }
`
// Transition into #91ff9d


class AboutMeSection extends Component {
    render() {
        return (
            <Section>
                <IntroductionLink to="/aboutme">
                    Hi, I'm Tathya
                </IntroductionLink>
                <p style={{display: "block", marginTop: "0px"}}>I like coding, turtles and turtles</p>
                <div style={{position: "absolute", bottom: "10vh"}}>
                    <SocialLink href="https://www.instagram.com/tathyagarg">Instagram</SocialLink>
                    <SocialLink href="https://www.github.com/tathyagarg">GitHub</SocialLink>
                </div>
            </Section>
        )
    };
}

export default AboutMeSection