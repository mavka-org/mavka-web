import React from 'react';
import s from './Double_Open_OneColumn.module.css';
import g from './../Style.module.css';
import Party from "../Icon/Party";
import Question from '../Objects/Question/Question.jsx';
import Topic from './../Objects/Topic/Topic.jsx';
import Header from './../Objects/Header/Header.jsx';
import Comment from './../Objects/Comment/Comment.jsx';
import Video from './../Objects/Video/Video.jsx';
import Next from './../Objects/Next/Next.jsx';
class DoubleOpenOneColumn extends React.Component {
    render() {
        return (
            <div>
                <div className={s.question_body}>
                    <Question />
                    <div className={s.main_answers}>
                        <p><strong>Впиши відповіді на питання:</strong> </p>
                        <div className={s.answers_frame}>
                            <div className={s.answer}>
                                <div className={s.variant}>
                                    <div className={s.number}><div className={s.icon}></div><strong>1:</strong></div><div>Визначте довжину відрізка math: O_1O_2.</div></div>
                                <div className={s.comment}>
                                    <p>1) Знайдемо довжину одного кола `math: =8\pi`.2) Знайдемо довжину радіусу з формули довжини кола3) Відстань між центрами кіл дорівнює двом радіусам </p>
                                </div>
                                <input className={s.inp}></input>
                                <div className={s.correct_answer}>
                                    <div className={s.correct_number}><strong>Правильна відповідь: </strong>89</div>
                                </div>
                            </div>
                            <div className={s.answer}>
                                <div className={s.variant}>
                                    <div className={s.number}><div className={s.icon}></div><strong>1:</strong></div><div>Визначте довжину відрізка math: O_1O_2.</div></div>
                                <div className={s.comment}>
                                    <p>1) Знайдемо довжину одного кола `math: =8\pi`.2) Знайдемо довжину радіусу з формули довжини кола3) Відстань між центрами кіл дорівнює двом радіусам </p>
                                </div>
                                <input className={s.inp}></input>
                                <div className={s.correct_answer}>
                                    <div className={s.correct_number}><strong>Правильна відповідь: </strong>89</div>
                                </div>
                            </div>
                        </div>

                        <Next />

                        <Topic />
                        <Comment />
                        <Video />
                    </div>

                </div>
            </div>
        )
    }
}

export default DoubleOpenOneColumn;