// GoogleCal.js
import React from "react";
import google from './google_cal_icon.png';
import ConstsDict from "./Consts";
import appointmentToCleanVarsDict from "./Utils";

class GoogleCal extends React.PureComponent {
    render() {
        const { appointment, name } = this.props;

        if (!appointment || !appointment.start) {
            return (
                <div>
                    <p>שעת המפגש אינה במערכת</p>
                </div>
            );
        }

        const cleanVarsDict = appointmentToCleanVarsDict(appointment);

        // Reconstruct semesterLastDay
        const semesterLastDay = `${ConstsDict.semesterLastDayYear}${ConstsDict.semesterLastDayMonth}${ConstsDict.semesterLastDayDay}`;

        // Build the Google Calendar event URL
        let template = "https://calendar.google.com/calendar/u/0/r/eventedit?";
        template += `dates=${cleanVarsDict.date}T${cleanVarsDict.startTime}/${cleanVarsDict.date}T${cleanVarsDict.endTime}`;
        template += `&text=${encodeURIComponent(`${name} | ${appointment.type}`)}`;
        template += `&location=${encodeURIComponent(`${appointment.location} | ${appointment.room}`)}`;
        const details = appointment.directors ? appointment.directors.join(", ") : "";
        template += `&details=${encodeURIComponent(details + " www.tau-cal.com")}`;
        template += `&recur=RRULE:FREQ=WEEKLY;UNTIL=${semesterLastDay}`;

        return (
            <div>
                <a href={template}>
                    <img alt="Google Calendar Link" width="40" height="40" src={google} />
                </a>
            </div>
        );
    }
}

export default GoogleCal;
