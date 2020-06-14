import React from 'react';
import s from './Course.module.css';

class Course extends React.Component {
    render() {
        return (
            <div className={s.course_frame} style={this.props.style} >
                <div className={s.wrapper}>
                    <div className={s.course}><div className={s.icon}>{this.props.pic}</div><div className={s.course_text}>{this.props.course}</div></div>
                </div>
            </div>
        )
    }
}

export default Course;