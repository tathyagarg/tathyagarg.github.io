import React, {useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Waves from "../waves-2.svg";
import data from "../blog_contents.json";
import tagColorMap from "../constants"
import timeConvert from "./timeConvert";

const MainDiv = styled.div`
    height: 100vh;
    background-color: #91ff9d;
    display: flex;
    justify-content: center;
`

const Header = styled.h1`
    font-size: 75px;
    font-weight: 200;
    margin-top: 1.5em;
    position: absolute;
`

const Skills = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 50px;
    margin-top: 15rem;
    height: 70%;
    width: 70%;
`

const Column = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: solid 1px transparent;
    border-radius: 0.5em;
    transition-duration: 500ms;
    background-color: white;
    color: black;
`

const Tile = styled.div`
    height: 7.5em;
    width: 7.5em;
    display: block;
    border: solid 1px transparent;
    border-radius: 0.5em;
    transition-duration: 500ms;
    background-color: red;
    color: black;
`

const Title = styled.div`
    grid-area: 1/1/2/3;
    background-color: blue;
    margin: 1em;
    font-size: 20px;
    text-align: center;
`

function PortfolioSection() {
    return (
        <section style={{height: "100vh"}}>
            <img src={Waves} alt="Waves" style={{marginTop: "0", width: "100%", position: "absolute"}}></img>
            <MainDiv>
                <Header>Portfolio</Header>
                <Skills>
                    <Column>
                        <Title>
                            <p style={{top: "50%", left: "50%"}}>Want to Learn</p>
                        </Title>
                        <Tile>C</Tile>
                        <Tile>A</Tile>
                        <Tile>B</Tile>
                        <Tile>C</Tile>
                        <Tile>A</Tile>
                        <Tile>B</Tile>
                        <Tile>C</Tile>
                        <Tile>A</Tile>
                    </Column>
                    <Column>
                        <Tile>A</Tile>
                        <Tile>B</Tile>
                        <Tile>C</Tile>
                    </Column>                    
                    <Column>
                        <Tile>A</Tile>
                        <Tile>B</Tile>
                        <Tile>C</Tile>
                    </Column>
                </Skills>
            </MainDiv>
        </section>
    )
}

export default PortfolioSection