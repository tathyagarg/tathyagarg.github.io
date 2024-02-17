import React, {Component} from "react";

class DynamicBlog extends Component {
    render() {
        const {title, contents, tags, date} = this.props;
        return (
            <div>
                <h1>{title}</h1>
                <p>{contents}</p>
            </div>
        )
    }
}

export default DynamicBlog