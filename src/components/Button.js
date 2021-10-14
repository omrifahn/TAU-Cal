import React from "react";
import createIcsString from "./createIcsString";

export class Button extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const element = document.createElement("a");
        const file = new Blob([createIcsString(this.props)]);
        element.href = URL.createObjectURL(file);
        element.download = "myFile.ics";
        element.click();
    }

    render() {

        return(
            <div>
                <button onClick={this.handleClick}>ייבא</button>
            </div>

    )}
}

export default Button