import React, {Component} from "react";
import styled from "styled-components";
import tagColorMap from "../constants";
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

const BlogPage = styled.div`
    width: 60%;
    background-color: #efefef;
    min-height: 100vh;
    margin-left:20%;
    margin-top: 1em;
    border-radius: 1em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

function get_correct_component(item, i) {
    if (/^#(?!#)/.test(item)) {return <h1 key={i}>{item.slice(1)}</h1>}
    if (/^##(?!#)/.test(item)) {return <h2 key={i}>{item.slice(2)}</h2>}
    return <p key={i}>{item}</p>
}

class Formatted extends Component {
    render() {
        return <div style={{padding: "1em 2em 1em 2em"}}>
            {this.props.contents.map((item, i) => get_correct_component(item, i))}
        </div>
    }
}

class DynamicBlog extends Component {
    render() {
        const tag = this.props.tag;
        return (
            <div style={{width: "99%", height: "100%", backgroundColor: tagColorMap[tag][1], padding: "1% 0.5%", margin: "0 auto"}}>
                <BlogPage>
                    <Formatted contents={this.props.contents}/>
                </BlogPage>
            </div>
        )
    }
}

export default DynamicBlog