import React, { Component } from 'react';
import g from './../Global/GlobalStyle.css';
import s from './ABCDE.module.css';
import Strong from "../Icon/Strong";
import CorrectArrow from "../Icon/CorrectArrow";
import Incorrect from "../Icon/Incorrect";
import Party from "../Icon/Party";
import PointDown from "../Icon/PointDown";
import Lamb from "../Icon/Lamb";
import VideoCamera from "../Icon/VideoCamera";

class ABCDE extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className={s.background}>
                <div className={s.page}>
                    <div className={s.question_header}>
                        <div className={s.title_bar}>
                            <p><strong><Strong />Практика</strong></p>
                            <p><strong>українська мова та література </strong> 2018 додаткова сесія</p>
                            <button className={s.end}>Завершити</button>
                        </div>
                    </div>


                    <div className={s.question_body}>
                        <div className={s.question_form}>
                            <div className={s.question_frame}>
                                <div className={s.title}><strong>Завдання 12</strong></div>
                                <p>Прочитайте речення (цифра позначає попередній розділовий знак)</p>
                                <p>Аж тут підвівся Орфей і,(1) ударивши по золотих струнах своєї кіфари,(2) заспівав: то була пісня,(3) що її найдужче любила його мати,(4)прекрасна муза Калліопа, ударивши по золотих струнах своєї кіфари,(5) і,(6) можливо,(7) саме згадка про неї надала Орфеєвому голосу ще більшої сили,(8) щирості,(9) влади.</p>
                                <p>НЕПРАВИЛЬНО обґрунтовано вживання розділових знаків, запропоноване в рядку</p>
                            </div>
                            <div className={s.topic_frame}>
                                <p><strong><PointDown /> Тема:</strong></p>
                                <p className={s.topic_frame_text}>Орфомеопія</p>
                            </div>
                            <div className={s.comment_frame}>
                                <p><strong><Lamb />Коментар</strong></p>
                                <p className={s.comment_frame_text}>Перед тим як читати варіанти відповідей, спросубй самостійно пояснити вживання розподілових знаків, а вже потім порівнюй їх із запропонованими.</p>
                            </div>
                            <div className={s.video_explanation_frame}>
                                <p><strong><VideoCamera /> Відеопояснення</strong></p>
                                <div className={s.video}></div>
                            </div>

                        </div>

                        <div className={s.answers_frame}>
                            <p><strong>Обери одну відповідь</strong></p>
                            <div className={s.answers}>
                            <div className={s.answer}>
                                    <div className={s.answer_text_frame}>
                                        <div className={s.letter_choice}>

                                            <div className={s.check}>
                                                <div className={s.symbol}><Incorrect /></div>
                                                <div className={s.letter}><strong>А:</strong></div>
                                            </div>
                                        </div>
                                        <p className={s.answer_text}>коми 4 і 5 — при відокремленій прикладці</p>
                                    </div>
                                    <p className={s.comment}>Пояснення правильне, "прекрасна муза Калліопа" - прикладка, яка відокремлюється комами, бо стоїть після означуваного слова "мати".</p>
                                </div>
                                <div className={s.answer}>
                                    <div className={s.answer_text_frame}>
                                        <div className={s.letter_choice}>

                                            <div className={s.check}>
                                                <div className={s.symbol}><Incorrect /></div>
                                                <div className={s.letter}><strong>Б:</strong></div>
                                            </div>
                                        </div>
                                        <p className={s.answer_text}>коми 4 і 5 — при відокремленій прикладці</p>
                                    </div>
                                    <p className={s.comment}>Пояснення правильне, "прекрасна муза Калліопа" - прикладка, яка відокремлюється комами, бо стоїть після означуваного слова "мати".</p>
                                </div>
                                <div className={s.answer}>
                                    <div className={s.answer_text_frame}>
                                        <div className={s.letter_choice}>

                                            <div className={s.check}>
                                                <div className={s.symbol}><Incorrect /></div>
                                                <div className={s.letter}><strong>В:</strong></div>
                                            </div>
                                        </div>
                                        <p className={s.answer_text}>коми 4 і 5 — при відокремленій прикладці</p>
                                    </div>
                                    <p className={s.comment}>Пояснення правильне, "прекрасна муза Калліопа" - прикладка, яка відокремлюється комами, бо стоїть після означуваного слова "мати".</p>
                                </div>
                                <div className={s.answer}>
                                    <div className={s.answer_text_frame}>
                                        <div className={s.letter_choice}>

                                            <div className={s.check}>
                                                <div className={s.symbol}><Incorrect /></div>
                                                <div className={s.letter}><strong>Г:</strong></div>
                                            </div>
                                        </div>
                                        <p className={s.answer_text}>коми 4 і 5 — при відокремленій прикладці</p>
                                    </div>
                                    <p className={s.comment}>Пояснення правильне, "прекрасна муза Калліопа" - прикладка, яка відокремлюється комами, бо стоїть після означуваного слова "мати".</p>
                                </div>
                                <div className={s.answer}>
                                    <div className={s.answer_text_frame}>
                                        <div className={s.letter_choice}>

                                            <div className={s.check}>
                                                <div className={s.symbol}><Incorrect /></div>
                                                <div className={s.letter}><strong>Д:</strong></div>
                                            </div>
                                        </div>
                                        <p className={s.answer_text}>коми 4 і 5 — при відокремленій прикладці</p>
                                    </div>
                                    <p className={s.comment}>Пояснення правильне, "прекрасна муза Калліопа" - прикладка, яка відокремлюється комами, бо стоїть після означуваного слова "мати".</p>
                                </div>
                                <div className={s.result_frame}>
                                    <div className={s.result}><strong>Правильно!</strong><Party /></div>
                                    <p className={s.stats}>80% учнів впоралися з цим завданням</p>
                                    <button class={s.btn}>Наступне питання</button>
                                    <button class={s.pass}>Пропустити</button>
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