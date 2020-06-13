import React from 'react';
import s from './Open.module.css'
import Strong from "../Icon/Strong";
import Party from "../Icon/Party";
import PointDown from "../Icon/PointDown";
import Lamb from "../Icon/Lamb";
import VideoCamera from "../Icon/VideoCamera";
const Open = () =>{
    return(
        <div className={s.background}>
            <div className={s.page}>
                <div className={s.question_header}>
                    <div className={s.title_bar}>
                        <p><strong><Strong/>Практика</strong></p>
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
                    <div className={s.result}>
                        <div className={s.result_frame}>
                            <div className={s.correct_message}>Правильно!<Party/></div>
                            <div className={s.correct_result}>Ти отримуєш 1 бал із 1 можливого</div>
                            <button class={s.btn}>Наступне питання</button>
                        </div>
                    </div>
                    <div className={s.topic_frame}>
                        <p><strong><PointDown/>Тема:</strong></p>
                        <p className={s.topic_frame_text}>· Арифметична та геометрична прогресії, їх властивості. Формули n-го члена арифметичної та геометричної прогресій.</p>
                    </div>
                    <div className={s.comment_frame}>
                        <p><strong><Lamb/>Коментар</strong></p>
                        <p className={s.comment_frame_text}>1) Прирівняємо перший член арефметичної прогресії до третього. `math: 2a_1=a_3`

2) Виразимо `math: d` через `math: a_1`. Маємо `math: 2a_1=a_1+2dᅠ\Rightarrowᅠa_1=2d`

3) Запишемо формулу суми арефметичної прогресії `math: ᅠ\Rightarrowᅠd=190`

4) Замінимо `math: a_1` на `math: 2d.` Маємо `math: \fᅠ\Rightarrowᅠd=9.5`.</p>
                    </div>
                    <div className={s.video_explanation_frame}>
                        <p><strong><VideoCamera/>Відеопояснення</strong></p>
                        <div className={s.video}></div>
                    </div>
                </div>
                    
            </div>
            </div>
        </div>
    )
} 

export default Open;