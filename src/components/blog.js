import React, {useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Waves from "../waves-1.svg";
import data from "../blog_contents.json";

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
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 50px;
    grid-row-gap: 50px;
    margin-top: 15rem;
    height: 70%;
    width: 70%;
`

const BlogViewContainer = styled.div`
    height: 100%;
    width: 100%;
    display: block;
    border: solid 1px transparent;
    border-radius: 0.5em;
    transition-duration: 500ms;
    background-color: ${props=>props.bg};
    color: black;

    &:hover {
        transform: rotate(${props=>props.rotation}deg);
        transition-duration: 500ms;
    }
`

const tagColorMap = {
    "Turtles": ["#2E8A6E", "rgba(102, 204, 102, 0.8)"],
    "Aquatic Animals": ["#35638B", "rgba(72, 157, 201, 0.8)"],
    "Birds": ["#D5C198", "rgba(237, 214, 163, 0.8)"],
    "History": ["#DBADBF", "rgba(251, 174, 210, 0.8)"],
    "Computer Science": ["#78C850", "rgba(120, 200, 80, 0.8)"],
    "Cars": ["#DA3030", "rgba(255, 51, 51, 0.8)"]
}

function timeConvert(UNIX) {
    const a = new Date(UNIX * 1000);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    return month + " " + date + ", " + year;
}

function BlogView({contents}) {
    const [head, date, tag] = contents;
    const [rotation, setRotation] = useState(0);

    const handleMouseOver = () => {
        const min = 5;
        const max = 10;
        const randomRotation = (Math.floor(Math.random() * (max-min+1)) + min) * (Math.random() >= 0.5 ? 1 : -1);
        setRotation(randomRotation);
    }

    return (
        <BlogViewContainer rotation={rotation} onMouseOver={handleMouseOver} bg={tagColorMap[tag][1]}>
            <div style={{margin: "2rem"}}>
                <div style={{backgroundColor: tagColorMap[tag][0], display: "inline-block", height: "fit-content", borderRadius: "1em"}}>
                    <p style={{margin: "10px"}}>{tag}</p>
                </div>
                <h1>{head}</h1>
                <p>{timeConvert(date)}</p>
            </div>
        </BlogViewContainer>
    )
}

function BlogSection() {
    const all_contents = fetch_contents();

    return (
        <section style={{height: "110vh"}}>
            <img src={Waves} alt="Waves" style={{marginTop: "0", width: "100%", position: "absolute"}}></img>
            <MainDiv>
                <Header>Blog</Header>
                <Blogs>
                    {all_contents.map( (content) => {
                        return <Link to={content[3]} style={{textDecoration: "none"}}>
                            <BlogView contents={content}/>
                        </Link>
                    } )}
                </Blogs>
            </MainDiv>
        </section>
    )
}

function blog_format(items) {
    const ret_vals = [];
    for (let key in items) {
        ret_vals.push(items[key]);
    }
    return ret_vals;
}

function fetch_contents() {
    let items = [];
    for (let blog_post of data) {
        items.push(blog_format(blog_post));
    }
    items.sort(function(a, b){return b[1]-a[1]})

    return items.slice(0, 6);
}

export default BlogSection