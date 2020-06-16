import React from 'react'
import s from './ABCD_OneColumn.module.css';
import g from './../Style.module.css';
import Party from "../Icon/Party";
import Answer from '../Objects/Answer/Answer.jsx';
import Question from '../Objects/Question/Question';
import Topic from './../Objects/Topic/Topic.jsx';
import Header from './../Objects/Header/Header.jsx';
import Comment from './../Objects/Comment/Comment.jsx';
import Video from './../Objects/Video/Video.jsx';
import Next from './../Objects/Next/Next.jsx';
class ABCD_OneColumn extends React.Component {
    render() {
        return (
            <div>
                <div className={s.question_body}>
                    <Question />
                    <div className={s.answers_frame}>
                        <p className={g.choose}><strong>Обери одну відповідь</strong></p>
                        <div className={s.answers}>
                            <Answer />
                            <Answer />
                            <Answer />
                            <Answer />
                        </div>
                        <Next />
                        <Question />
                        <Topic />
                        <Comment />
                        <Video />
                    </div>
                </div>
            </div>
        )
    }
}

export default ABCD_OneColumn;