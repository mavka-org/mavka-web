import React from 'react'
import s from './Logic_Couples_4_5.module.css';
import g from './../Style.module.css';
import Strong from "../Icon/Strong/Strong";
import Party from "../Icon/Party/Party";
import PointDown from "../Icon/PointDown/PointDown";
import Lamb from "../Icon/Lamb/Lamb";
import VideoCamera from "../Icon/VideoCamera/VideoCamera";
import Correct from "../Icon/Correct/Correct";
import Incorrect from "../Icon/Incorrect/Incorrect";
import Question from '../Objects/Question/Question.jsx';
import CoupleAnswer from '../Objects/Answer/Couple_Answer';

const Logic_Couples_4_5 = () => {
    return (
        <div className={s.background}>
            <div className={[s.page, g.page_].join(' ')}>
                <div className={g.question_header}>
                    <div className={g.title_bar}>
                        <div><strong><Strong />Практика</strong></div>
                        <div><strong>Математика </strong> 2018 додаткова сесія</div>
                        <button className={g.end}>Завершити</button>
                    </div>
                </div>
                <div className={s.question_body}>
                    <div className={s.question_frame}>
                        <Question />
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
                    <div className={s.answers_frame}>
                        <p className={s.choose}><strong>Обери одну відповідь</strong></p>
                        <div className={s.answers}>
                            <CoupleAnswer />
                            <CoupleAnswer />
                            <CoupleAnswer />
                            <CoupleAnswer />
                            <CoupleAnswer />
                        </div>
                        <div class={s.table}>
                            <table class={s.select_answer}>
                                <tr>
                                    <th></th>
                                    <th>А</th>
                                    <th>Б</th>
                                    <th>В</th>
                                    <th>Г</th>
                                    <th>Д</th>
                                </tr>
                                <tr>
                                    <th class={s.r}>1</th>
                                    <td>
                                        <label>
                                            <input type="radio" value="1a" name="a[1]" class={s.q_radio}></input>
                                            <span class={s.marker}></span>
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            <input type="radio" value="1b" name="a[1]" class={s.q_radio}></input>
                                            <span class={s.marker}></span>
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            <input type="radio" value="1c" name="a[1]" class={s.q_radio}></input>
                                            <span class={s.marker}></span>
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            <input type="radio" value="1d" name="a[1]" class={s.q_radio}></input>
                                            <span class={s.marker}></span>
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            <input type="radio" value="1e" name="a[1]" class={s.q_radio}></input>
                                            <span class={s.marker}></span>
                                        </label>
                                    </td>

                                </tr>
                                <tr>
                                    <th class={s.r}>2</th>
                                    <td>
                                        <label>
                                            <input type="radio" value="2a" name="a[2]" class={s.q_radio}></input>
                                            <span class={s.marker}></span>
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            <input type="radio" value="2b" name="a[2]" class={s.q_radio}></input>
                                            <span class={s.marker}></span>
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            <input type="radio" value="2c" name="a[2]" class={s.q_radio}></input>
                                            <span class={s.marker}></span>
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            <input type="radio" value="2d" name="a[2]" class={s.q_radio}></input>
                                            <span class={s.marker}></span>
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            <input type="radio" value="2e" name="a[2]" class={s.q_radio}></input>
                                            <span class={s.marker}></span>
                                        </label>
                                    </td>

                                </tr>
                                <tr>
                                    <th class={s.r}>3</th>
                                    <td>
                                        <label>
                                            <input type="radio" value="3a" name="a[3]" class={s.q_radio}></input>
                                            <span class={s.marker}></span>
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            <input type="radio" value="3b" name="a[3]" class={s.q_radio}></input>
                                            <span class={s.marker}></span>
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            <input type="radio" value="3c" name="a[3]" class={s.q_radio}></input>
                                            <span class={s.marker}></span>
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            <input type="radio" value="3d" name="a[3]" class={s.q_radio}></input>
                                            <span class={s.marker}></span>
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            <input type="radio" value="3e" name="a[3]" class={s.q_radio}></input>
                                            <span class={s.marker}></span>
                                        </label>
                                    </td>

                                </tr>
                                <tr>
                                    <th class={s.r}>4</th>
                                    <td>
                                        <label>
                                            <input type="radio" value="4a" name="a[4]" class={s.q_radio}></input>
                                            <span class={s.marker}></span>
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            <input type="radio" value="4b" name="a[4]" class={s.q_radio}></input>
                                            <span class={s.marker}></span>
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            <input type="radio" value="4c" name="a[4]" class={s.q_radio}></input>
                                            <span class={s.marker}></span>
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            <input type="radio" value="4d" name="a[4]" class={s.q_radio}></input>
                                            <span class={s.marker}></span>
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            <input type="radio" value="4e" name="a[4]" class={s.q_radio}></input>
                                            <span class={s.marker}></span>
                                        </label>
                                    </td>

                                </tr>
                            </table>
                            <div className={g.result_frame}>
                                <div className={g.result}><strong>Правильно! <Party /></strong></div>
                                <div className={g.stats}>80% учнів впоралися з цим завданням</div>
                                <div className={s.wrap}>
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

export default Logic_Couples_4_5;