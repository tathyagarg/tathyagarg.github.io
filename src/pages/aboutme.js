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

const BlockHeader = styled.h1`
    font-size: 3rem;
    font-weight: 300;
    margin-bottom: 0;
    grid-area: 1/1/2/2;
`

const Card = styled.div`
    background-color: red;
    border-radius: 1em;
    height: 90%;
    width: 95%;
    margin: auto;
    grid-row: span 2;
    font-size: 2rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Parent = styled.div`
    background-color: #91ff9d;
    height: 100vh;
    background-image:
        linear-gradient(to right, rgba(100, 255, 170, 10) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(100, 255, 170, 10) 1px, transparent 1px);
    background-size: 2.5rem 2.5rem;
    background-position: center center;
    overflow-y: hidden;
`

const aboutme = {
    padding: "6.25%",
    display: "grid",
    height: "69vh",
    columnGap: "3em",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "1fr",
    margin: "0"
}

const hobbies = {
    border: "2px solid red",
    borderRadius: "2em",
    textAlign: "center",
    backgroundColor: "#ffdddd",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "repeat(7, 1fr)",
    boxShadow: "0 0 0.5em 0.2em red"
}

const interests = {
    border: "2px solid blue",
    borderRadius: "2em",
    textAlign: "center",
    backgroundColor: "#ddddff",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "repeat(7, 1fr)",
    boxShadow: "0 0 0.5em 0.2em blue"
}

const fascinations = {
    border: "2px solid green",
    borderRadius: "2em",
    textAlign: "center",
    backgroundColor: "#ddffdd",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "repeat(7, 1fr)",
    boxShadow: "0 0 0.5em 0.2em green"
}

const hobbies_card = {
    border: "2px red solid",
    backgroundColor: "#ffafaf"
}

const interests_card = {
    border: "2px blue solid",
    backgroundColor: "#afafff"
}

const fascinations_card = {
    border: "2px green solid",
    backgroundColor: "#afffaf"
}

const AboutMe = () => {
    return <Parent>
        <div>
            <BackLink to={"/"}>
                &lt;- Back
            </BackLink>
            <h1 style={{textAlign: "center", margin: "0", fontWeight: "400", fontSize: "3em"}}>About Me</h1>
        </div>
        <div style={aboutme}>
            <div style={hobbies}>
                <BlockHeader>Hobbies</BlockHeader>
                <Card style={hobbies_card}>Solving Rubik's Cubes</Card>
                <Card style={hobbies_card}>Collecting Pokemon Cards</Card>
                <Card style={hobbies_card}>Learning German</Card>
            </div>
            <div style={interests}>
                <BlockHeader>Interests</BlockHeader>
                <Card style={interests_card}>Computer Science</Card>
                <Card style={interests_card}>Artificial Intelligence</Card>
                <Card style={interests_card}>Research</Card>
            </div>
            <div style={fascinations}>
                <BlockHeader>Fascinations</BlockHeader>
                <Card style={fascinations_card}>Turtles</Card>
                <Card style={fascinations_card}>Cars</Card>
                <Card style={fascinations_card}>Birds</Card>
            </div>
        </div>
    </Parent>;
}

export default AboutMe;