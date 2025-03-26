import ConstsDict from "./Consts";

function appointmentToCleanVarsDict(appointment) {
    let cleanVarsDict = {};

    // Remove colons from time strings
    cleanVarsDict["start"] = appointment.start.replace(/:/g, '');
    cleanVarsDict["end"] = appointment.end.replace(/:/g, '');
    
    // Parse the semester first day
    let semesterFirstDay = new Date(
        `${ConstsDict.semesterFirstDay.year}-${ConstsDict.semesterFirstDay.month}-${ConstsDict.semesterFirstDay.day}`
    );
    
    let appointmentDate = new Date(semesterFirstDay);
    appointmentDate.setDate(appointmentDate.getDate() + (appointment.day - ConstsDict.semesterFirstDay.dayOfWeek));
    
    // Format the date components with leading zeros
    let year = appointmentDate.getFullYear();
    let month = String(appointmentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    let day = String(appointmentDate.getDate()).padStart(2, '0');
    cleanVarsDict["date"] = `${year}${month}${day}`;

    return cleanVarsDict;
}
export default appointmentToCleanVarsDict;
