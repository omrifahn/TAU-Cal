// IcsFileButton.js
import React from "react";
import createIcsString from "./createIcsString";

class IcsFileButton extends React.PureComponent {
    handleClick = () => {
        const icsContent = createIcsString(this.props);
        const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "TAU-Cal.ics";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    render() {
        return <button onClick={this.handleClick}>Download .ics</button>;
    }
}

export default IcsFileButton;
