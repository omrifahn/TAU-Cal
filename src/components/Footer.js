import React from "react";
import ConstsDict from "./Calendar_components/Consts";

export class Footer extends React.PureComponent {
    render() {
        let omri = "https://www.linkedin.com/in/omri-fahn/";
        let ido = "https://www.linkedin.com/in/ido-weins";
        let ron = "https://www.linkedin.com/in/ron-peleg-8175b0173";
        let gilad = "https://www.linkedin.com/in/gilad-shacham/";
        let GPT4 = "https://openai.com/product/gpt-4";

        return (
            <div>
                <footer className="footer">
                    <p>
                        סמסטר {ConstsDict.currentSemester === 1 ? "א" : "ב"}׳ |{" "}
                        {ConstsDict.semesterLastDay.year}
                    </p>
                    <p>
                        Created by <a href={omri}>Omri Fahn</a> and wouldn't be possible without the help of <br />
                        <a href={ido}>Ido Weinstein</a>, <a href={ron}>Ron Peleg</a>,{" "}
                        <a href={gilad}>Gilad Shacham</a> and our beloved <a href={GPT4}>GPT-4</a>.
                    </p>
                    <p>TAU-Cal © {ConstsDict.semesterLastDay.year}</p>
                </footer>
            </div>
        );
    }
}

export default Footer;
