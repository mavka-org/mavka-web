import React from 'react';
import s from './Double_Open.module.css';
import g from './../Style.module.css';
import Strong from "../Icon/Strong";
import Incorrect from "../Icon/Incorrect";
import Correct from "../Icon/Correct";
import PointDown from "../Icon/PointDown";
import Lamb from "../Icon/Lamb";
import VideoCamera from "../Icon/VideoCamera";
import Party from "../Icon/Party";
import Question from '../Objects/Question/Question.jsx';
const DoubleOpen = () => {
    return (
        <div className={g.background}>
            <div className={[s.page, g.page_].join(' ')}>
                <div className={g.question_header}>
                    <div className={g.title_bar}>
                        <div><strong><Strong />Практика</strong></div>
                        <div><strong>Математика </strong> 2018 додаткова сесія</div>
                        <button className={g.end}>Завершити</button>
                    </div>
                </div>
                <div className={s.question_body}>
                    <Question />
                    <div className={s.main_answers}>
                        <p><strong>Впиши відповіді на питання:</strong> </p>
                        <div className={s.answers_frame}>
                            <div className={s.answer}>
                                <div className={s.variant}>
                                    <div className={s.number}><div className={s.icon}><Incorrect /></div><strong>1:</strong></div><div>Визначте довжину відрізка math: O_1O_2.</div></div>
                                <div className={s.comment}>
                                    <div>1) Знайдемо довжину одного кола `math: =8\pi`.2) Знайдемо довжину радіусу з формули довжини кола3) Відстань між центрами кіл дорівнює двом радіусам </div>
                                </div>
                                <input className={s.inp}></input>
                                <div className={s.correct_answer}>
                                    <div className={s.correct_number}><strong>Правильна відповідь: </strong>89</div>
                                </div>
                            </div>
                            <div className={s.answer}>
                                <div className={s.variant}>
                                    <div className={s.number}><div className={s.icon}><Incorrect /></div><strong>1:</strong></div><div>Визначте довжину відрізка math: O_1O_2.</div></div>
                                <div className={s.comment}>
                                    <div>1) Знайдемо довжину одного кола `math: =8\pi`.2) Знайдемо довжину радіусу з формули довжини кола3) Відстань між центрами кіл дорівнює двом радіусам </div>
                                </div>
                                <input className={s.inp}></input>
                                <div className={s.correct_answer}>
                                    <div className={s.correct_number}><strong>Правильна відповідь: </strong>89</div>
                                </div>
                            </div>
                        </div>

                        <div className={g.result_frame}>
                            <div className={g.result}><strong> Правильно! <Party /></strong></div>
                            <div className={g.stats}>80% учнів впоралися з цим завданням</div>
                            <div className={s.wrap}>
                                <button class={g.btn}>Наступне питання</button>
                                <button class={g.pass}>Пропустити</button>
                            </div>
                        </div>

                        <div className={g.topic_frame}>
                            <p><strong><PointDown /> Тема:</strong></p>
                            <div className={g.topic_frame_text}>Орфомеопія</div>
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

                </div>
            </div>
        </div>
    )
}

export default DoubleOpen;