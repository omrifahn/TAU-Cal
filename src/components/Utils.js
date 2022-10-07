import ConstsDict from "./Consts";

function appointmentToCleanVarsDict (appointment) {
    let cleanVarsDict = {}
    cleanVarsDict["day"] = appointment.day - 1
    cleanVarsDict["start"] = appointment.start.slice(0,2) + appointment.start.slice(3,5) + appointment.start.slice(6,8) //getting rid of ":"
    cleanVarsDict["end"] = appointment.end.slice(0,2) + appointment.end.slice(3,5) + appointment.end.slice(6,8) //getting rid of ":"

    let semesterStartYearMonth = ConstsDict.semesterStart.slice(0, 6)
    let semesterStartDay = ConstsDict.semesterStart.slice(6, 8)
    let firstDayOfAppointment = String( parseInt(semesterStartDay) + cleanVarsDict.day )
    cleanVarsDict["date"] = semesterStartYearMonth + firstDayOfAppointment

    return cleanVarsDict;
}
export default appointmentToCleanVarsDict;