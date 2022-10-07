import React from "react";
import google from './google_cal_icon.png'
import ConstsDict from "./Consts";
import appointmentToCleanVarsDict from "./Utils";

export class GoogleCal extends React.PureComponent {

    render() {
        let appointment = this.props.appointment
        let name = this.props.name
        if (appointment === undefined || appointment.start === undefined){
            return (
                <div>
                    <p>שעת המפגש אינה במערכת</p>
                </div>
            )
        }
        let cleanVarsDict = appointmentToCleanVarsDict(appointment)

        let template = "https://calendar.google.com/calendar/u/0/r/eventedit?dates="
        template += cleanVarsDict.date + "T" + cleanVarsDict.start + "/"
        template += cleanVarsDict.date + "T" + cleanVarsDict.end
        template += "&text=" + name + " | " + appointment.type
        template += "&location=" + appointment.location + " | " + appointment.room
        template += "&details=" + appointment.directors.map(dir => " " + dir)
        template += " www.tau-cal.com"
        template += "&recur=RRULE:FREQ=WEEKLY;UNTIL=" + ConstsDict.semesterEnd

        return(
            <div>
                <a href={template}> <img alt="Google Calendar Link" width="40" height="40" src={google}/></a>
            </div>
        )}
}
export default GoogleCal