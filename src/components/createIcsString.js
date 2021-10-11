
function createIcsString (props){

    let appointments = props.appointments
    let name = props.name

    const semesterStart = "20211010"
    const semesterEnd = "20220110"

    let template = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//bobbin v0.1//NONSGML iCal Writer//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
`
    for (let i = 0; i < appointments.length; i++) {
        if (appointments[i] == undefined || appointments[i].start == undefined){
            return "dont have data"
        }
        let day = appointments[i].day - 1
        let start = appointments[i].start.slice(0,2) + appointments[i].start.slice(3,5) + appointments[i].start.slice(6,8) //getting rid of ":"
        let end = appointments[i].end.slice(0,2) + appointments[i].end.slice(3,5) + appointments[i].end.slice(6,8)

        let date = semesterStart.slice(0, 6) + String( parseInt(semesterStart.slice(6, 8)) + day) //first occurrence of appointment

        template += `BEGIN:VEVENT
DTSTART;TZID=Asia/Jerusalem:${date + "T" + start}
DTEND;TZID=Asia/Jerusalem:${date + "T" + end}
RRULE:FREQ=WEEKLY;UNTIL=${semesterEnd}
LOCATION:${ appointments[i].location || appointments[i].room ? appointments[i].location + " | " + appointments[i].room : ""}

DESCRIPTION:
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:${name + " | " + appointments[i].type}
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