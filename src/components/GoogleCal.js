import React from "react";
import courses from "../courses"
import createIcsString from "./createIcsString";
import google from './google_cal_icon.png'

export class GoogleCal extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {

        let appointment = this.props.appointment
        let name = this.props.name
        const semesterStart = "20211010"
        const semesterEnd = "20220110"


        if (appointment == undefined || appointment.start == undefined){
            return (
                <div>
                    <p>אין במערכת את שעת המפגש</p>
                </div>
            )
        }


        let day = appointment.day - 1
        let start = appointment.start.slice(0,2) + appointment.start.slice(3,5) + appointment.start.slice(6,8) //getting rid of ":"
        let end = appointment.end.slice(0,2) + appointment.end.slice(3,5) + appointment.end.slice(6,8)
        let date = semesterStart.slice(0, 6) + String( parseInt(semesterStart.slice(6, 8)) + day) //first occurrence of appointment

        let template = "https://calendar.google.com/calendar/u/0/r/eventedit?dates="

        template += date + "T" + start + "/"
        template += date + "T" + end
        template += "&text=" + name + " | " + appointment.type
        template += "&location=" + appointment.location + " | " + appointment.room
        template += "&details=Dekh&recur=RRULE:FREQ=WEEKLY;UNTIL=" + semesterEnd

        return(
            <div>
                <a target="_blank" href={template}> <img width="40" height="40" src={google}/> </a>
            </div>

        )}
}

export default GoogleCal