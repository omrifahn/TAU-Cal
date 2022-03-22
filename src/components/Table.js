import React from "react";
import Button from "./Button";
import QrGenerator from "./QrGenerator";
import './Table.css'
import '../courses.json'
import GoogleCal from "./GoogleCal";

export class Table extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            search:'',
            courses: require('../courses.json')
        }
    }

    onSearch(value, newPage){
        this.setState( {search: value} )
    }

    apToDayAndHour(ap){
        let days = [" ", "א׳", "ב׳", "ג׳", "ד׳", "ה׳", "ו׳", "ש׳"]
        if (!ap.start || !ap.end || !ap.day){
            return ""
        }
        return <div>{days[ap.day]}<br/>{ap.start.slice(0, 5)} - {ap.end.slice(0, 5)}</div>
    }

    render() {
        let courses = this.state.courses
        //the filter below creates search string for each course. replace \u00a0 (weird " ") with normal " ". again for replacing another \u00a0.
        let filteredCourses = courses.filter( course =>
            course.appointments[0].semester === 2 &&
            (course.name + course.id + "-" + course.group + course.appointments[0].directors + course.id.slice(0, 4) + course.id.slice(5,9) + course.group)
                .replace('\u00a0', " ").replace('\u00a0', " ").includes(this.state.search)
        );

        filteredCourses = filteredCourses.slice(0, 15)
        if (this.state.search === ''){
            filteredCourses = []
        }

        return (
            <div>
                <br/>
                <br/>
                <input className="input" placeholder=" מס׳ קורס / שם קורס / שם מתרגל" size="50" onChange={(e) => this.onSearch(e.target.value)}></input>
                <br/>
                <br/>
                <br/>
                <table className="table">
                    <thead>
                    <tr>
                        <th width="100">יבוא למחשב</th>
                        <th width="100">Google Cal</th>
                        <th width="100">iPhone / iPad<br/><small>לחיצה ארוכה על הקוד</small></th>
                        <th width="100">יום ושעה</th>
                        <th width="150">שם המרצה</th>
                        <th width="200">שם הקורס</th>
                        <th width="100">מס׳ קבוצה</th>
                        <th width="100">מס׳ קורס</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        filteredCourses.map(course => (
                        <tr>
                            <td><Button name={course.name} appointments={course.appointments}/></td>
                            <td>{ course.appointments.map( ap => <GoogleCal name={course.name} appointment={ap}/> ) }</td>
                            <td>{ course.appointments.map( ap => <QrGenerator name={course.name} appointments={[ap]}/> ) }</td>
                            <td>{ course.appointments.map( ap => this.apToDayAndHour(ap) ) }</td>
                            <td>{course.appointments[0].directors.map(dir => (<div>{dir}</div>))}</td>
                            <td width="150">{course.name}</td>
                            <td>{course.group}</td>
                            <td>{course.id}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                {
                    (filteredCourses.length > 0) ? <div><br/><br/></div> : <div>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    </div>
                }
            </div>
        )
    }
}
export default Table

// {
//     'id': '0366-2010',
//     'group': '01',
//     'name': 'מבוא להסתברות',
//     'notes': '',
//     'faculty': 'מדעים מדויקים',
//     'track': 'מתמטיקה',
//     'complete': True,
//     'appointments': [{'directors': ['ד"ר\xa0סלומקה\xa0בועז אברהם'],'type': 'שיעור', 'location': 'שרייבר מתמטי', 'room': '007', 'day': 2, 'start': '16:00:00', 'end': '17:00:00', 'semester': 1}, {'directors': ['ד"ר\xa0סלומקה\xa0בועז אברהם'], 'type': 'שיעור', 'location': 'שרייבר מתמטי', 'room': '007', 'day': 5, 'start': '14:00:00', 'end': '16:00:00', 'semester': 1}], 'links': {'סילבוס': 'https://www.ims.tau.ac.il/Tal/Syllabus/Syllabus_L.aspx?course=0366201001&year=2020', 'בחינה': 'https://www.ims.tau.ac.il/Bhina_L.aspx?kurs=03662010&kv=01&sem=20201', 'דרישות קדם': 'https://www.ims.tau.ac.il/Drishot_L.aspx?kurs=03662010&kv=01&sem=20201', 'Moodle': 'https://moodle.tau.ac.il/course/view.php?id=0366201001', 'רשימת תפוצה': 'http://listserv.tau.ac.il/archives/0366-2010-01.html'}, 'special_instruction': False, 'special_instruction_text': ''}

// [
//     {'directors': ['ד"ר\xa0סלומקה\xa0בועז אברהם'], 'type': 'שיעור', 'location': 'שרייבר מתמטי', 'room': '007', 'day': 2, 'start': '16:00:00', 'end': '17:00:00', 'semester': 1},
//     {'directors': ['ד"ר\xa0סלומקה\xa0בועז אברהם'], 'type': 'שיעור', 'location': 'שרייבר מתמטי', 'room': '007', 'day': 5, 'start': '14:00:00', 'end': '16:00:00', 'semester': 1}
// ]