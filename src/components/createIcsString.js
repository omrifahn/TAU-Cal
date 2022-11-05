import ConstsDict from "./Consts";
import appointmentToCleanVarsDict from "./Utils";

function createIcsString (props){
    let appointments = props.appointments
    let name = props.name

    let template = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//bobbin v0.1//NONSGML iCal Writer//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
`
    for (let i = 0; i < appointments.length; i++) {
        let appointment = appointments[i]
        if (appointment === undefined || appointment.start === undefined){
            return "No data available"
        }
        let cleanVarsDict = appointmentToCleanVarsDict(appointment)
        template += `BEGIN:VEVENT
DTSTART;TZID=Asia/Jerusalem:${cleanVarsDict.date + "T" + cleanVarsDict.start}
DTEND;TZID=Asia/Jerusalem:${cleanVarsDict.date + "T" + cleanVarsDict.end}
RRULE:FREQ=WEEKLY;UNTIL=${ConstsDict.semesterLastDay}
LOCATION:${ appointment.location || appointment.room ? appointment.location + " | " + appointment.room : ""}
URL:https://www.tau-cal.com
DESCRIPTION: ${appointment.directors.map(dir => " " + dir)}
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:${name + " | " + appointment.type}
TRANSP:OPAQUE
END:VEVENT
`
    }
    template += `END:VCALENDAR`

    return template
}
export default createIcsString
//not inside:
//DTSTAMP:20091130T213238Z
// UID:1285935469767a7c7c1a9b3f0df8003a@yoursever.com
// CREATED:20091130T213238Z