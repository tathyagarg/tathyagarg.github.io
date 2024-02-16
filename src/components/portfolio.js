import React, {Component} from "react";

class PortfolioSection extends Component {
    render() {
        const portfolio_props = {
            backgroundColor: "yellow",
            height: "75vh",
        }
        return (
            <div style={portfolio_props}>I'm so cooler (Portfolio)</div>
        )
    };
}

export default PortfolioSection