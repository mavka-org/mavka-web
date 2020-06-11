import React, { Component } from 'react';
import s from './ABCDE.module.css';
import g from './../Style.module.css';
import Strong from "../Icon/Strong";
import CorrectArrow from "../Icon/CorrectArrow";
import Incorrect from "../Icon/Incorrect";
import Party from "../Icon/Party";
import PointDown from "../Icon/PointDown";
import Lamb from "../Icon/Lamb";
import VideoCamera from "../Icon/VideoCamera";
import Question from '../Objects/Question/Question.jsx';
import Answer from '../Objects/Answer/Answer.jsx';

class ABCDE extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className={g.background}>
            <div className={[s.page, g.page_].join(' ')} >
                <div className={g.question_header}>
                    <div className={g.title_bar}>
                        <p><strong><Strong /> Практика</strong></p>
                        <div><strong>українська мова та література </strong> 2018 додаткова сесія</div>
                        <button className={g.end}>Завершити</button>
                    </div>
                </div>
                <div className={s.question_body}>
                    <div className={s.question_form}>
                        <Question />
                        <div className={g.topic_frame}>
                            <p><strong><PointDown /> Тема:</strong></p>
                            <div className={s.topic_frame_text}>Орфомеопія</div>
                        </div>
                        <div className={g.comment_frame}>
                            <p><strong><Lamb /> Коментар</strong></p>
                            <div className={g.comment_frame_text}>Перед тим як читати варіанти відповідей, спросубй самостійно пояснити вживання розподілових знаків, а вже потім порівнюй їх із запропонованими.</div>
                        </div>
                        <div className={g.video_explanation_frame}>
                            <p><strong><VideoCamera /> Відеопояснення</strong></p>
                            <div className={g.video}></div>
                        </div>
                    </div>

                    <div className={s.answers_frame}>
                        <p className={g.choose}><strong>Обери одну відповідь</strong></p>
                        <div className={s.answers}>
                            <Answer />
                            <Answer />
                            <Answer />
                            <Answer />
                            <Answer />
                        </div>
                        <div className={g.result_frame}>
                            <p className={g.result}><strong><Party /> Правильно!</strong></p>
                            <p className={g.stats}>80% учнів впоралися з цим завданням</p>
                            <div className={s.wrap}>
                                <button class={g.btn}>Наступне питання</button>
                                <button class={g.pass}>Пропустити</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default ABCDE;