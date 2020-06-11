import React from 'react'
import s from './ABCD.module.css'
import g from './../Style.module.css';
import Question from '../Objects/Question/Question.jsx';
import Answer from '../Objects/Answer/Answer.jsx';
import Strong from "../Icon/Strong";
import PointDown from "../Icon/PointDown";
import Lamb from "../Icon/Lamb";
import VideoCamera from "../Icon/VideoCamera";
import CorrectArrow from "../Icon/CorrectArrow";
import Incorrect from "../Icon/Incorrect";
import Party from "../Icon/Party";
const ABCD = () => {
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
                            <div className={g.answer}>
                                <div className={g.answer_text_frame}>
                                    <div className={g.letter_choice}>

                                        <div className={g.check}>
                                            <div className={g.symbol}><Incorrect /></div>
                                            <div className={g.letter}><strong>Б:</strong></div>
                                        </div>
                                    </div>
                                    <div className={g.answer_text}>коми 4 і 5 — при відокремленій прикладці</div>
                                </div>
                                <div className={g.comment}>Пояснення правильне, "прекрасна муза Калліопа" - прикладка, яка відокремлюється комами, бо стоїть після означуваного слова "мати".</div>
                            </div>
                            <div className={g.answer}>
                                <div className={g.answer_text_frame}>
                                    <div className={g.letter_choice}>

                                        <div className={g.check}>
                                            <div className={g.symbol}><Incorrect /></div>
                                            <div className={g.letter}><strong>В:</strong></div>
                                        </div>
                                    </div>
                                    <div className={g.answer_text}>коми 4 і 5 — при відокремленій прикладці</div>
                                </div>
                                <div className={g.comment}>Пояснення правильне, "прекрасна муза Калліопа" - прикладка, яка відокремлюється комами, бо стоїть після означуваного слова "мати".</div>
                            </div>
                            <div className={g.answer}>
                                <div className={g.answer_text_frame}>
                                    <div className={g.letter_choice}>

                                        <div className={g.check}>
                                            <div className={g.symbol}><Incorrect /></div>
                                            <div className={g.letter}><strong>Г:</strong></div>
                                        </div>
                                    </div>
                                    <div className={g.answer_text}>коми 4 і 5 — при відокремленій прикладці</div>
                                </div>
                                <div className={g.comment}>Пояснення правильне, "прекрасна муза Калліопа" - прикладка, яка відокремлюється комами, бо стоїть після означуваного слова "мати".</div>
                            </div>
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

export default ABCD;