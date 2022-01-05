
function createIcsString (props){

    let appointments = props.appointments
    let name = props.name

    const semesterStart = "20220220"
    const semesterEnd = "20220611"

    let template = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//bobbin v0.1//NONSGML iCal Writer//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
`

    for (let i = 0; i < appointments.length; i++) {
        let ap = appointments[i]
        if (ap == undefined || ap.start == undefined){
            return "No data available"
        }

        let day = ap.day - 1
        let start = ap.start.slice(0,2) + ap.start.slice(3,5) + ap.start.slice(6,8) //getting rid of ":"
        let end = ap.end.slice(0,2) + ap.end.slice(3,5) + ap.end.slice(6,8)

        let date = semesterStart.slice(0, 6) + String( parseInt(semesterStart.slice(6, 8)) + day) //first occurrence of appointment

        template += `BEGIN:VEVENT
DTSTART;TZID=Asia/Jerusalem:${date + "T" + start}
DTEND;TZID=Asia/Jerusalem:${date + "T" + end}
RRULE:FREQ=WEEKLY;UNTIL=${semesterEnd}
LOCATION:${ ap.location || ap.room ? ap.location + " | " + ap.room : ""}

DESCRIPTION: ${ap.directors.map(dir => " " + dir)}
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:${name + " | " + ap.type}
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