import React from "react";
import ConstsDict from "./Calendar_components/Consts";

export class Footer extends React.PureComponent {
    render() {
        let omri =  "https://www.linkedin.com/in/omri-fahn/"
        let ido = "https://www.linkedin.com/in/ido-weins"
        let ron = "https://www.linkedin.com/in/ron-peleg-8175b0173"

        return(
            <div>
                <footer className="footer">
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

                    <p>סמסטר {ConstsDict.currentSemester === 1 ? "א" : "ב"}׳ | {ConstsDict.semesterLastDay.slice(0,4)}</p>
                    <p>
                        Created by <a href={omri}>Omri Fahn</a> and wouldn't be possible without the help of <a href={ido}>Ido Weinstein</a> and <a href={ron}>Ron Peleg</a>.
                    </p>
                    <p>TAU-Cal © {ConstsDict.semesterLastDay.slice(0,4)}</p>
                </footer >
            </div>
        )}
}
export default Footer

