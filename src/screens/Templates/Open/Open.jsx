import React from 'react';
import s from './Open.module.css'
import g from './../Style.module.css';
import Question from '../Objects/Question/Question.jsx';
import Topic from './../Objects/Topic/Topic.jsx';
import Header from './../Objects/Header/Header.jsx';
import Comment from './../Objects/Comment/Comment.jsx';
import Video from './../Objects/Video/Video.jsx';
import Next from './../Objects/Next/Next.jsx';
const Open = () => {
    return (
        <div className={s.background}>
            <div className={[s.page, g.page_].join(' ')}>
                <Header />
                <div className={s.question_body}>
                    <Question />
                    <div className={s.main_answers}>
                        <p><strong>Впиши відповіді на питання:</strong> </p>
                        <div className={s.answers_frame}>
                            <div className={s.answer}>
                                <div className={s.question}>
                                    <p className={s.variant}><div className={s.check}></div><div className={s.number}></div>Визначте довжину відрізка math: O_1O_2.</p>
                                    <div className={s.comment}>
                                        <p>Прирівняємо перший член арефметичної прогресії до третього. З формули суми арефметичної прогресії виразимо різницю math: d.</p>
                                    </div>
                                    <input className={s.inp}></input>
                                    <div className={s.correct_answer}>
                                        <div className={s.correct_number}><strong>Правильна відповідь: </strong>89</div>
                                    </div>
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
        </div>
    )
}

export default Open;