// createIcsString.js
import ConstsDict from "./Consts";
import appointmentToCleanVarsDict from "./Utils";

function createIcsString(props) {
    const { appointments, name } = props;

    const semesterLastDay = `${ConstsDict.semesterLastDayYear}${ConstsDict.semesterLastDayMonth}${ConstsDict.semesterLastDayDay}T000000Z`;

    let icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//TAU-Cal//NONSGML iCal Writer//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
`;

    for (const appointment of appointments) {
        if (!appointment || !appointment.start) {
            continue;
        }

        const cleanVarsDict = appointmentToCleanVarsDict(appointment);

        const location = appointment.location || appointment.room
            ? `${appointment.location} | ${appointment.room}`
            : "";

        const description = appointment.directors
            ? appointment.directors.join(", ")
            : "";

        icsContent += `BEGIN:VEVENT
DTSTART;TZID=Asia/Jerusalem:${cleanVarsDict.date}T${cleanVarsDict.startTime}
DTEND;TZID=Asia/Jerusalem:${cleanVarsDict.date}T${cleanVarsDict.endTime}
RRULE:FREQ=WEEKLY;UNTIL=${semesterLastDay}
LOCATION:${location}
URL:https://www.tau-cal.com
DESCRIPTION:${description}
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:${name} | ${appointment.type}
TRANSP:OPAQUE
END:VEVENT
`;
    }

    icsContent += `END:VCALENDAR`;

    return icsContent;
}

export default createIcsString;
//not inside:
//DTSTAMP:20091130T213238Z
// UID:1285935469767a7c7c1a9b3f0df8003a@yoursever.com
// CREATED:20091130T213238Z