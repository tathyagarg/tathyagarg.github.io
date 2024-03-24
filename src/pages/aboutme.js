import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

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

const parent = {
    backgroundColor: "#91ff9d",
    height: "100vh"
}

const aboutme = {
    padding: "6.25%",
    backgroundColor: "#91ff9d",
    height: "69vh",
    display: "grid",
    columnGap: "3em",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "1fr",
    margin: "0"
}

const AboutMe = () => {
    return <div style={parent}>
        <div>
            <BackLink to={"/"}>
                &lt;- Back
            </BackLink>
            <h1 style={{textAlign: "center", margin: "0", fontWeight: "400"}}>About Me</h1>
        </div>
        <div style={aboutme}>
            <div style={{backgroundColor: "red"}}>
                <h1>Hobbies</h1>
            </div>
            <div style={{backgroundColor: "blue"}}>
                <h1>Interests</h1>
            </div>
            <div style={{backgroundColor: "green"}}>
                <h1>Fascinations</h1>
            </div>
        </div>
    </div>;
}

export default AboutMe;