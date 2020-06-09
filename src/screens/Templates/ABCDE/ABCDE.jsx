import React from 'react'
import s from './ABCDE.module.css'
const ABCDE = () =>{
    return(
        <div className={s.background}>
            <div className={s.page}>
                <div className={s.question_header}>
                    <div className={s.title_bar}>
                        <p><strong>Практика</strong></p>
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
                        <p><strong>Тема:</strong></p> 
                        <p className={s.topic_frame_text}>Орфомеопія</p>
                    </div>
                    <div className={s.comment_frame}>
                        <p><strong>Коментар</strong></p> 
                        <p className={s.comment_frame_text}>Перед тим як читати варіанти відповідей, спросубй самостійно пояснити вживання розподілових знаків, а вже потім порівнюй їх із запропонованими.</p>
                    </div>
                    <div className={s.video_explanation_frame}>
                        <p><strong>Відеопояснення</strong></p>
                        <div className={s.video}></div>
                    </div>
                </div>
                
                <div className={s.answers_frame}>
                    <p className={s.choose}><strong>Обери одну відповідь</strong></p>
                    <div className={s.answers}>
                        <div className={s.answer}>
                            <div className={s.answer_text_frame}>
                                <div className={s.letter_choice}>
                                    <div className={s.icon}></div>
                                    <p><strong>А:</strong></p>
                                </div>
                                <p className={s.answer_text}> коми 1 і 2 — при відокремленій обставині</p>
                            </div>
                            <p className={s.comment}>Сполука "ударивши по золотих струнах своєї кіфари" — відокремлена обставина, виражена дієприслівниковим зворотом, пояснення правильне.</p>
                        </div>
                        <div className={s.answer}>
                            <div className={s.answer_text_frame}>
                                <div className={s.letter_choice}>
                                    <div className={s.icon}></div>
                                    <p><strong>Б:</strong></p>
                                </div>
                                <p className={s.answer_text}> кома 3 – перед сурядною частиною складного речення</p>
                            </div>
                            <p className={s.comment}>Кома 3 стоїть перед підрядною означальною частиною складного речення (...то була пісня, (яка?) що її найдужче любила його мати...), тому пояснення є помилковим.</p>
                        </div>
                        <div className={s.answer}>
                            <div className={s.answer_text_frame}>
                                <div className={s.letter_choice}>
                                    <div className={s.icon}></div>
                                    <p><strong>В:</strong></p>
                                </div>
                                <p className={s.answer_text}>коми 4 і 5 — при відокремленій прикладці</p>
                            </div>
                            <p className={s.comment}>Пояснення правильне, "прекрасна муза Калліопа" - прикладка, яка відокремлюється комами, бо стоїть після означуваного слова "мати".</p>
                        </div>
                        <div className={s.answer}>
                            <div className={s.answer_text_frame}>
                                <div className={s.letter_choice}>
                                    <div className={s.icon}></div>
                                    <p><strong>Г:</strong></p>
                                </div>
                                <p className={s.answer_text}> коми 6 і 7 – при вставному слові</p>
                            </div>
                            <p className={s.comment}>"Можливо" - вставне слово, що виражає невпевненість; оскільки вставні слова завжди виділяємо комами, пояснення правильне.</p>
                        </div>
                        <div className={s.answer}>
                            <div className={s.answer_text_frame}>
                                <div className={s.letter_choice}>
                                    <div className={s.icon}></div>
                                    <p><strong>Д:</strong></p>
                                </div>
                                <p className={s.answer_text}> кома 8 і 9 – при однорідних членах речення</p>
                            </div>
                            <p className={s.comment}>Пояснення правильне. "сили, щирості, влади" - однорідні додатки, між якими ставимо коми.</p>
                        </div>
                    </div>
                    <div className={s.result_frame}>
                        <p className={s.result}><strong>Правильно!</strong></p>
                        <p className={s.stats}>80% учнів впоралися з цим завданням</p>
                        <button class={s.btn}>Наступне питання</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
} 

export default ABCDE;