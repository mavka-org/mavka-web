import React from 'react';
import s from './Super_Open.module.css';
import g from './../Style.module.css';
import Question from '../Objects/Question/Question.jsx';
import Topic from './../Objects/Topic/Topic.jsx';
import Header from './../Objects/Header/Header.jsx';
import Comment from './../Objects/Comment/Comment.jsx';
import Video from './../Objects/Video/Video.jsx';
import Next from './../Objects/Next/Next.jsx';
const SuperOpen = () => {
    return (
        <div className={s.background}>
            <div className={[s.page, g.page_].join(' ')}>
                <Header />
                <div className={s.question_body}>
                    <Question />
                    <div className={s.main_answers}>
                        <Next />
                        <Topic />
                        <Comment />
                        <Video />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuperOpen;