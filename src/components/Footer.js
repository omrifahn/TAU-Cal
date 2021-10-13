import React from "react";

export class Footer extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let omri =  "https://www.linkedin.com/in/omri-fahn-7b3187177/"
        let ido = "https://www.linkedin.com/in/ido-weins"
        let ron = "https://www.linkedin.com/in/ron-peleg-8175b0173"

        return(
            <div>

                <footer className="footer">
                    <p>
                        Created by <a href={omri}>Omri Fahn</a> and wouldn't be possible without the help of <a href={ido}>Ido Weinstein</a> and <a href={ron}>Ron Peleg</a>.
                    </p>
                    <p>If you want to help keep this site running<a href="https://www.paypal.com/donate?hosted_button_id=H96J86CSYA4VU">Donate with PayPal</a>.</p>

                    <p>TAU-Cal © 2021</p>
                </footer >
            </div>
        )}
}

export default Footer

