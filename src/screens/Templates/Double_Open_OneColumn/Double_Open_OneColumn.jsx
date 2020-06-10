import React from 'react';
import s from './Double_Open_OneColumn.module.css'
const DoubleOpenOneColumn = () =>{
    return(
        <div className={s.background}>
            <div className={s.page}>
                <div className={s.question_header}>
                    <div className={s.title_bar}>
                        <p><strong>Практика</strong></p>
                        <p><strong>Математика </strong> 2018 додаткова сесія</p>
                        <button className={s.end}>Завершити</button>
                    </div>
                </div>
            <div className={s.question_body}>
                <div className={s.question_frame}>
                    <div className={s.title}><strong>Завдання 26</strong></div>
                    <p>У прямокутник math: ABCD вписано два кола із центрами в точках math: О_1, таmath: О_2, кожне з яких дотикається до трьох сторін прямокутника та одне до одного (див. рисунок). Сума довжин уписаних кіл дорівнює math: 16\pi.</p>
                </div>
                <div className={s.main_answers}>
                    <p><strong>Впиши відповіді на питання:</strong> </p>
                    <div className={s.answers_frame}>


                        <div className={s.answer}>
                            <div className={s.question}>
                                <p className={s.variant}><div className={s.number}><strong>1:</strong></div>Визначте довжину відрізка math: O_1O_2.</p>
                                <div className={s.comment}>
                                    <p>1) Знайдемо довжину одного кола `math: =8\pi`.2) Знайдемо довжину радіусу з формули довжини кола3) Відстань між центрами кіл дорівнює двом радіусам </p>
                                </div>
                                <input className={s.inp}></input>
                                <div className={s.correct_answer}>
                                    <div className={s.correct_number}><strong>Правильна відповідь: </strong>89</div>
                                </div>
                            </div>
                        </div>
                        <div className={s.answer}>
                            <div className={s.question}>
                                <p className={s.variant}><div className={s.number}><strong>1:</strong></div>Визначте довжину відрізка math: O_1O_2.</p>
                                <div className={s.comment}>
                                    <p>1) Знайдемо довжину одного кола `math: =8\pi`.2) Знайдемо довжину радіусу з формули довжини кола3) Відстань між центрами кіл дорівнює двом радіусам </p>
                                </div>
                                <input className={s.inp}></input>
                                <div className={s.correct_answer}>
                                    <div className={s.correct_number}><strong>Правильна відповідь: </strong>89</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={s.result}>
                        <div className={s.result_frame}>
                            <div className={s.correct_message}>Частково правильно</div>
                            <div className={s.correct_result}>Ти отримуєш 1 бал із 2 можливих правильно</div>
                            <button class={s.btn}>Наступне питання</button>
                        </div>
                    </div>
                    <div className={s.topic_frame}>
                        <p><strong>Тема:</strong></p> 
                        <p className={s.topic_frame_text}>Коло. Довжина кола. Круг. Площі прямокутника, паралелограма, ромба, трикутника, трапеції.</p>
                    </div>
                    <div className={s.comment_frame}>
                        <p><strong>Коментар</strong></p> 
                        <p className={s.comment_frame_text}>Потрібно зрозуміти, що два кола рівні. Знайти радіус кола. Виразити сторони через радіус. </p>
                    </div>
                    <div className={s.video_explanation_frame}>
                        <p><strong>Відеопояснення</strong></p>
                        <div className={s.video}></div>
                    </div>
                </div>
                    
            </div>
            </div>
        </div>
    )
} 

export default DoubleOpenOneColumn;