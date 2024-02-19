import React, {Component} from "react";
import styled from "styled-components";
import tagColorMap from "../constants";
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

const BlogPage = styled.div`
    width: 60%;
    background-color: #efefef;
    min-height: 10em;
    margin-left:20%;
    margin-top: 1em;
    border-radius: 1em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

class DynamicBlog extends Component {
    constructor(props) {
        super(props)
        this.state = {markdown: null}
    }

    componentDidMount() {
        // make this line accept a dynamic file, also make it work
        const filePath = `./turtles-1234567890.md`;
        fetch(filePath)
          .then(response => {
            console.log(response)
            return response.text()
          })
          .then(text => {
            console.log(`Text is: ${text}`)
            this.state.markdown = marked(text)
        })
        console.log(this.state)
    }

    render() {
        const tag = this.props.tag;
        console.log(this.props);
        return (
            <div style={{width: "99%", height: "100%", backgroundColor: tagColorMap[tag][1], padding: "1% 0.5%", margin: "0 auto"}}>
                <BlogPage>
                    <div style={{padding: "1em 2em 1em 2em"}}>
                        {/* Add the markdown here */}
                    </div>
                </BlogPage>
            </div>
        )
    }
}

export default DynamicBlog