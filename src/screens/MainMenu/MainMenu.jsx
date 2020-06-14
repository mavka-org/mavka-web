import React from 'react';
import s from './MainMenu.module.css'
import g from './../../Templates/Style.module.css';
import ZNO from './Object/ZNO/ZNO';
import Topic from './../../Templates/Objects/Topic/Topic.jsx';
import Strong from './../../Templates/Icon/Strong/Strong';
import VideoCamera from './../../Templates/Icon/VideoCamera/VideoCamera';
class MainMenu extends React.Component {
    render() {
        return (
            <div className={g.background}>
                <div className={[s.page, g.page_].join(' ')} >
                    <div className={s.header}>
                        <div className={s.question_title}>
                            <strong>Тест з <br></br>української мови та літератури</strong>
                        </div>
                        <div className={s.exit}>
                            <button className={s.end}>
                                Назад до предметів
                            </button>
                        </div>


                    </div>
                    <div className={s.question_body}>
                        <div className={s.tests_body_left}>
                            <ZNO />
                            <ZNO />
                            <ZNO />
                            <ZNO />
                        </div>

                        <div className={s.test_body_right}>
                            <div className={s.scores_frame}>
                                <div className={s.title}>
                                    <strong>Бали ЗНО 2018 додаткова сесія</strong>
                                </div>
                                <div className={s.score_frame}>
                                    <div className={s.score}>
                                        <div className={s.mark}>200</div>
                                        <div className={s.comment}>ЗНО з 200</div>
                                    </div>
                                    <div className={s.score}>
                                        <div className={s.mark}>12</div>
                                        <div className={s.comment}>ДПА з 12</div>
                                    </div>
                                    <div className={s.score}>
                                        <div className={s.mark}>64</div>
                                        <div className={s.comment}>Тестовий бал з 64</div>
                                    </div>
                                </div>
                                <div className={s.btn_wrap}><button className={g.btn}>Переглянути помилки</button></div>
                            </div>
                            <div className={s.buttons_frame}>
                                <div className={s.btn}>
                                    <div className={s.wrap}>
                                        <div className={s.btn_title}><strong>Практикуватися</strong></div>
                                        <div className={s.comment}>Проходь завдання та вчися на поясненнях</div>
                                    </div>
                                </div>
                                <div className={s.btn}>
                                    <div className={s.wrap}>
                                        <div className={s.btn_title}><strong>Симулювати ЗНО</strong></div>
                                        <div className={s.comment}>Перевір знання в умовах справжнього тестування</div>
                                    </div>
                                </div>
                            </div>
                            <div className={s.description}>Ти також можеш роздрукувати цей тест тут та автоматично перевірити розв’язання з нашим мобільним додатком (незабаром)</div>
                            <Topic />
                            <div className={s.video_explanation_frame}>
                                <p><strong><VideoCamera /> Відеопояснення</strong></p>
                                <div className={s.video}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainMenu;