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

const parent = {
    backgroundColor: "#91ff9d",
    height: "100vh"
}

const aboutme = {
    padding: "6.25%",
    backgroundColor: "#91ff9d",
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
    backgroundColor: "pink"
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
            <div style={hobbies}>
                <BlockHeader>Hobbies</BlockHeader>
                <Card style={hobbies_card}>Suh</Card>
                <Card style={hobbies_card}>Suh</Card>
                <Card style={hobbies_card}>Suh</Card>
            </div>
            <div style={interests}>
                <BlockHeader>Interests</BlockHeader>
                <Card>Suh</Card>
                <Card>Suh</Card>
                <Card>Suh</Card>
            </div>
            <div style={fascinations}>
                <BlockHeader>Fascinations</BlockHeader>
                <Card>Suh</Card>
                <Card>Suh</Card>
                <Card>Suh</Card>
            </div>
        </div>
    </div>;
}

export default AboutMe;