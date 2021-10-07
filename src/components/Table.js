import React from "react";
import courses from "../courses"

export class Table extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {search:''}
    }

    onSearch(value, newPage){
        this.setState( {search: value} )
    }
//
    render() {
        let filteredCourses = courses.filter((course) => (course.name + course.id + course.appointments[0].directors[0] + course.id.slice(0, 4) + course.id.slice(5,9)).includes(this.state.search));
        filteredCourses = filteredCourses.slice(0, 15)
        if (this.state.search == ''){
            filteredCourses = []
        }

        return (
            <div>
                <br/>
                <br/>
                <input size="100" onChange={(e) => this.onSearch(e.target.value)}></input>
                <br/>
                <br/>
                <br/>
                <table>
                    <thead>
                    <tr>
                        <th width="100">ייבוא ללוח השנה</th>
                        <th width="150">שם המרצה / מתרגל</th>
                        <th width="150">שם הקורס</th>
                        <th width="100">פקולטה</th>
                        <th width="100">מס׳ קבוצה</th>
                        <th width="100">מס׳ קורס</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredCourses.map(course => (
                        <tr>
                            <td>
                                <button>ייבא</button>
                            </td>
                            <td>{course.appointments[0].directors[0]}</td>
                            <td width="150">{course.name}</td>
                            <td>{course.faculty}</td>
                            <td>{course.group}</td>
                            <td>{course.id}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table