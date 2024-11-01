import React from "react";
import createIcsString from "./createIcsString";

export class IcsFileButton extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const element = document.createElement("a");
        const file = new Blob([createIcsString(this.props)], { type: 'text/calendar;charset=utf-8' });
        element.href = URL.createObjectURL(file);
        element.download = "TAU-Cal.ics";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
        document.body.removeChild(element);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>.ics</button>
            </div>
        );
    }
}

export default IcsFileButton;
