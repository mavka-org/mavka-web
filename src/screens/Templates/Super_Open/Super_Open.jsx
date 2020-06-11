import React from 'react';
import s from './Super_Open.module.css'
import Strong from "../Icon/Strong";
import Party from "../Icon/Party";
import PointDown from "../Icon/PointDown";
import Lamb from "../Icon/Lamb";
import VideoCamera from "../Icon/VideoCamera";
const SuperOpen = () =>{
    return(
        <div className={s.background}>
            <div className={s.page}>
                <div className={s.question_header}>
                    <div className={s.title_bar}>
                        <p><strong><Strong/>Практика</strong></p>
                        <p><strong>математика </strong> 2018 додаткова сесія</p>
                        <button className={s.end}>Завершити</button>
                    </div>
                </div>
            <div className={s.question_body}>
                <div className={s.question_frame}>
                    <div className={s.title}><strong>Завдання 31</strong></div>
                    <p>Задано функцію `math: f(x)=x^2+3x-10`.</p>
                    
                       
                    
                </div>
                <div className={s.main_answers}>
                    
                    <div className={s.result}>
                        <div className={s.result_frame}>
                            <div className={s.correct_message}>Молодець! <Party/></div>
                            <div className={s.correct_result}>Ми нарахуємо тобі типовий бал, який отримували учні зі схожими тестовими відповідями на ЗНО</div>
                            <button className={s.btn}>Наступне питання</button>
                        </div>
                    </div>
                    <div className={s.topic_frame}>
                        <p><strong><PointDown/>Тема:</strong></p>
                        <p className={s.topic_frame_text}>Квадратична функція, її графік і властивості. Похідна функції, її геометричний і фізичний зміст.</p>
                    </div>
                    <div className={s.comment_frame}>
                        <p><strong><Lamb/>Коментар</strong></p>
                        <p className={s.comment_frame_text}>комментарий</p>
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

export default SuperOpen;