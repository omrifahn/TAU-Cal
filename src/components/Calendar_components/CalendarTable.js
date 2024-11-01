import React from "react";
import IcsFileButton from "./IcsFileButton";
import QrGenerator from "./QrGenerator";
import './CalendarTable.css';
import '../../courses.json';
import GoogleCal from "./GoogleCal";
import ConstsDict from "./Consts";

export class CalendarTable extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            courses: require('../../courses.json')
        };
    }

    onSearch(value) {
        this.setState({ search: value });
    }

    apToDayAndHour(ap) {
        let days = [" ", "א׳", "ב׳", "ג׳", "ד׳", "ה׳", "ו׳", "ש׳"];
        if (!ap.start || !ap.end || !ap.day) {
            return "";
        }
        return (
            <div>
                {days[ap.day]}
                <br />
                {ap.start.slice(0, 5)} - {ap.end.slice(0, 5)}
            </div>
        );
    }

    render() {
        let courses = this.state.courses;

        // Filter courses based on search input and current semester
        let filteredCourses = courses.filter(course =>
            course.appointments[0].semester === ConstsDict.currentSemester &&
            (course.name + course.id + "-" + course.group + course.appointments[0].directors.join(" ") + course.id.slice(0, 4) + course.id.slice(5, 9) + course.group)
                .toLowerCase()
                .includes(this.state.search.toLowerCase())
        );

        filteredCourses = filteredCourses.slice(0, 15);
        if (this.state.search === '') {
            filteredCourses = [];
        }

        return (
            <div>
                <br />
                <br />
                <input
                    className="input"
                    placeholder="מס׳ קורס 🔍 שם קורס 🔍 שם המרצה"
                    size="50"
                    onChange={(e) => this.onSearch(e.target.value)}
                />
                <br />
                <br />
                <br />
                <table className="table">
                    <thead>
                        <tr>
                            <th width="100">Google Cal / ics</th>
                            <th width="100">
                                iPhone / iPad
                                <br />
                                <small>לחיצה ארוכה על הקוד</small>
                            </th>
                            <th width="100">יום ושעה</th>
                            <th width="150">שם המרצה</th>
                            <th width="200">שם הקורס</th>
                            <th width="100">מס׳ קורס</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCourses.map(course => (
                            <tr key={course.id + course.group}>
                                <td>
                                    {course.appointments.map((ap, index) => (
                                        <React.Fragment key={index}>
                                            <GoogleCal name={course.name} appointment={ap} />
                                        </React.Fragment>
                                    ))}
                                    <IcsFileButton name={course.name} appointments={course.appointments} />
                                </td>
                                <td>
                                    {course.appointments.map((ap, index) => (
                                        <QrGenerator key={index} name={course.name} appointments={[ap]} />
                                    ))}
                                </td>
                                <td>
                                    {course.appointments.map((ap, index) => (
                                        <div key={index}>{this.apToDayAndHour(ap)}</div>
                                    ))}
                                </td>
                                <td>
                                    {course.appointments[0].directors.map((dir, index) => (
                                        <div key={index}>{dir}</div>
                                    ))}
                                </td>
                                <td width="150">{course.name}</td>
                                <td>
                                    {course.id.slice(0, 4)}
                                    <br />
                                    {course.id.slice(5, 9)}
                                    <br />
                                    {course.group}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {filteredCourses.length > 0 ? (
                    <div>
                        <br />
                        <br />
                    </div>
                ) : (
                    <div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                )}
            </div>
        );
    }
}

export default CalendarTable;
