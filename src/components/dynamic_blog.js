import React, {Component} from "react";
import styled from "styled-components";
import tagColorMap from "../constants";
import { PrismCode } from "react-prism";
import Prism from "prismjs";
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-python';

const BlogPage = styled.div`
    width: 60%;
    background-color: #efefef;
    min-height: 100vh;
    margin-left:20%;
    border-radius: 1em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

function get_correct_component(item, i) {
    if (/^#(?!#)/.test(item)) {return <h1 key={i}>{item.slice(1)}</h1>}
    if (/^##(?!#)/.test(item)) {return <h2 key={i}>{item.slice(2)}</h2>}
    const match = /!img<([^>]+)>/.exec(item)
    if (match) {return <img src={match[1]} width="100%"></img>}

    const match2 = /!link<([^>]+?),([^>]+)>/.exec(item)
    if (match2) { return <a href={match2[2]}>{match2[1]}</a> }

    const match3 = /!code<([^>]+),([^>]+)>/.exec(item)
    if (match3) { 
        return ( 
            <div style={{marginTop: "2em"}}>
                <pre style={{margin: 0}}>
                    <PrismCode className={`language-${match3[1]}`}>
                        {match3[2]}
                 </PrismCode>
                </pre>
            </div> 
        )
    }

    return <p key={i}>{item}</p>
}

class Formatted extends Component {
    render() {
        return <div style={{padding: "2em 2em 1em 2em"}}>
            {this.props.contents.map((item, i) => get_correct_component(item, i))}
        </div>
    }
}

class DynamicBlog extends Component {
    componentDidMount() {
        document.body.style.backgroundColor = tagColorMap[this.props.tag][1];
        window.scrollTo(0, 0)
        Prism.highlightAll()
    }

    componentWillUnmount() {
        document.body.style.backgroundColor = null;
    }

    render() {
        return (
            <div style={{width: "99%", height: "100%", padding: "1% 0", margin: "0 auto"}}>
                <BlogPage>
                    <Formatted contents={this.props.contents}/>
                </BlogPage>
            </div>
        )
    }
}

export default DynamicBlog