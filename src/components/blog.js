import React, {useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Waves from "../waves-1.svg";
import data from "../blog_contents.json";
import tagColorMap from "../constants"
import timeConvert from "./timeConvert";

const MainDiv = styled.div`
    height: 100vh;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
`

const Header = styled(Link)`
    font-size: 75px;
    font-weight: 200;
    color: black;
    text-decoration: none;
    margin-top: 1.5em;
    position: absolute;
    transition-duration: 500ms;

    &:hover {
        transform: rotate(10deg);
        transition-duration: 500ms;
    }
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
    border: solid 0.15em ${props=>props.bord};
    border-radius: 0.5em;
    transition-duration: 500ms;
    background-color: ${props=>props.bg};
    color: black;

    &:hover {
        transform: rotate(${props=>props.rotation}deg);
        transition-duration: 500ms;
    }
`

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
        <BlogViewContainer rotation={rotation} onMouseOver={handleMouseOver} bg={tagColorMap[tag][1]} bord={tagColorMap[tag][0]}>
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
        <section style={{height: "100vh"}}>
            <img src={Waves} alt="Waves" style={{marginTop: "0", width: "100%", position: "absolute"}}></img>
            <MainDiv>
                <Header to="/blog">Blog</Header>
                <Blogs>
                    {all_contents.map( (content) => {
                        return <Link to={"/"+content[0]+"-"+content[1]} style={{textDecoration: "none"}}>
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