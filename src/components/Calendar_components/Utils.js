// Utils.js
import ConstsDict from "./Consts";

function appointmentToCleanVarsDict(appointment) {
    const cleanVarsDict = {};

    const startTime = appointment.start.replace(/:/g, "");
    const endTime = appointment.end.replace(/:/g, "");

    const semesterFirstDate = new Date(
        parseInt(ConstsDict.semesterFirstDayYear),
        parseInt(ConstsDict.semesterFirstDayMonth) - 1,
        parseInt(ConstsDict.semesterFirstDayDay)
    );

    const appointmentDate = new Date(semesterFirstDate);
    appointmentDate.setDate(semesterFirstDate.getDate() + (appointment.day - 1));

    const year = appointmentDate.getFullYear().toString();
    const month = (appointmentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = appointmentDate.getDate().toString().padStart(2, '0');
    const date = year + month + day;

    cleanVarsDict["date"] = date;
    cleanVarsDict["startTime"] = startTime;
    cleanVarsDict["endTime"] = endTime;

    return cleanVarsDict;
}

export default appointmentToCleanVarsDict;
