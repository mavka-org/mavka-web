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

class ABCDE extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className={s.background}>
                <div className={[s.page, g.page_].join(' ')}>
                    <div className={g.question_header}>
                        <div className={g.title_bar}>
                            <p><strong><Strong />Практика</strong></p>
                            <p><strong>українська мова та література </strong> 2018 додаткова сесія</p>
                            <button className={g.end}>Завершити</button>
                        </div>
                    </div>


                    <div className={s.question_body}>
                        <div className={s.question_form}>
                            <div className={s.question_frame}>
                                <div className={g.title}><strong>Завдання 12</strong></div>
                                <p>Прочитайте речення (цифра позначає попередній розділовий знак)</p>
                                <p>Аж тут підвівся Орфей і,(1) ударивши по золотих струнах своєї кіфари,(2) заспівав: то була пісня,(3) що її найдужче любила його мати,(4)прекрасна муза Калліопа, ударивши по золотих струнах своєї кіфари,(5) і,(6) можливо,(7) саме згадка про неї надала Орфеєвому голосу ще більшої сили,(8) щирості,(9) влади.</p>
                                <p>НЕПРАВИЛЬНО обґрунтовано вживання розділових знаків, запропоноване в рядку</p>
                            </div>
                            <div className={g.topic_frame}>
                                <p><strong><PointDown /> Тема:</strong></p>
                                <p className={g.topic_frame_text}>Орфомеопія</p>
                            </div>
                            <div className={g.comment_frame}>
                                <p><strong><Lamb />Коментар</strong></p>
                                <p className={g.comment_frame_text}>Перед тим як читати варіанти відповідей, спросубй самостійно пояснити вживання розподілових знаків, а вже потім порівнюй їх із запропонованими.</p>
                            </div>
                            <div className={g.video_explanation_frame}>
                                <p><strong><VideoCamera /> Відеопояснення</strong></p>
                                <div className={g.video}></div>
                            </div>

                        </div>

                        <div className={s.answers_frame}>
                            <p><strong>Обери одну відповідь</strong></p>
                            <div className={s.answers}>
                            <div className={g.answer}>
                                    <div className={g.answer_text_frame}>
                                        <div className={g.letter_choice}>

                                            <div className={g.check}>
                                                <div className={g.symbol}><Incorrect /></div>
                                                <div className={g.letter}><strong>А:</strong></div>
                                            </div>
                                        </div>
                                        <p className={g.answer_text}>коми 4 і 5 — при відокремленій прикладці</p>
                                    </div>
                                    <p className={g.comment}>Пояснення правильне, "прекрасна муза Калліопа" - прикладка, яка відокремлюється комами, бо стоїть після означуваного слова "мати".</p>
                                </div>
                                <div className={g.answer}>
                                    <div className={g.answer_text_frame}>
                                        <div className={g.letter_choice}>

                                            <div className={g.check}>
                                                <div className={g.symbol}><Incorrect /></div>
                                                <div className={g.letter}><strong>Б:</strong></div>
                                            </div>
                                        </div>
                                        <p className={g.answer_text}>коми 4 і 5 — при відокремленій прикладці</p>
                                    </div>
                                    <p className={g.comment}>Пояснення правильне, "прекрасна муза Калліопа" - прикладка, яка відокремлюється комами, бо стоїть після означуваного слова "мати".</p>
                                </div>
                                <div className={g.answer}>
                                    <div className={g.answer_text_frame}>
                                        <div className={g.letter_choice}>

                                            <div className={g.check}>
                                                <div className={g.symbol}><Incorrect /></div>
                                                <div className={g.letter}><strong>В:</strong></div>
                                            </div>
                                        </div>
                                        <p className={g.answer_text}>коми 4 і 5 — при відокремленій прикладці</p>
                                    </div>
                                    <p className={g.comment}>Пояснення правильне, "прекрасна муза Калліопа" - прикладка, яка відокремлюється комами, бо стоїть після означуваного слова "мати".</p>
                                </div>
                                <div className={g.answer}>
                                    <div className={g.answer_text_frame}>
                                        <div className={g.letter_choice}>

                                            <div className={g.check}>
                                                <div className={g.symbol}><Incorrect /></div>
                                                <div className={g.letter}><strong>Г:</strong></div>
                                            </div>
                                        </div>
                                        <p className={g.answer_text}>коми 4 і 5 — при відокремленій прикладці</p>
                                    </div>
                                    <p className={g.comment}>Пояснення правильне, "прекрасна муза Калліопа" - прикладка, яка відокремлюється комами, бо стоїть після означуваного слова "мати".</p>
                                </div>
                                <div className={g.answer}>
                                    <div className={g.answer_text_frame}>
                                        <div className={g.letter_choice}>

                                            <div className={g.check}>
                                                <div className={g.symbol}><Incorrect /></div>
                                                <div className={g.letter}><strong>Д:</strong></div>
                                            </div>
                                        </div>
                                        <p className={g.answer_text}>коми 4 і 5 — при відокремленій прикладці</p>
                                    </div>
                                    <p className={g.comment}>Пояснення правильне, "прекрасна муза Калліопа" - прикладка, яка відокремлюється комами, бо стоїть після означуваного слова "мати".</p>
                                </div>
                                <div className={g.result_frame}>
                                    <p className={g.result}><strong><Party /> Правильно!</strong></p>
                                    <p className={g.stats}>80% учнів впоралися з цим завданням</p>
                                    <div className={g.wrap}>
                                        <button class={g.btn}>Наступне питання</button>
                                        <button class={g.pass}>Пропустити</button>
                                    </div>
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