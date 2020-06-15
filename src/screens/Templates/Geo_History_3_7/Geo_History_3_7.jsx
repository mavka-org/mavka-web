import React from 'react';
import s from './Geo_History_3_7.module.css';
import g from './../Style.module.css';
import Header from '../Objects/Header/Header';
import Answer from '../Objects/Answer/Answer';
import Question from '../Objects/Question/Question';
import Next from '../Objects/Next/Next';
import Topic from '../Objects/Topic/Topic';
import Comment from '../Objects/Comment/Comment';
import Video from '../Objects/Video/Video';

class Geo_History_3_7 extends React.Component {
    
    render() {
        return (
            <div className={g.background}>
                <div className={[s.page, g.page_].join(' ')}>
                   <Header />
                    <div style={{marginBottom:20}}><strong>Обери ТРИ відповіді:</strong></div>
                    <div className={s.question_body}>
                        <div className={s.answers}>
                            <Answer />
                            <Answer />
                            <Answer />
                        </div>
                        <div className={s.answers}>
                            <Answer />
                            <Answer />
                            <Answer />
                        </div>
                    </div>
                    <Next />
                    <Topic />
                    <Comment />
                    <Video />
                </div>
            </div>
        );
    }
}

export default Geo_History_3_7;