import React from "react";
import createIcsString from "./createIcsString";

export class IcsFileButton extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const element = document.createElement("a");
        const file = new Blob([createIcsString(this.props)]);
        element.href = URL.createObjectURL(file);
        element.download = "TAU-Cal.ics";
        element.click();
    }

    render() {

        return(
            <div>
                <button onClick={this.handleClick}>.ics</button>
            </div>

    )}
}

export default IcsFileButton