import React from 'react'
import s from './Logic_Couples_4_4_OneColumn.module.css';
import g from './../Style.module.css';
import Party from "../Icon/Party/Party";
import Question from '../Objects/Question/Question.jsx';
import CoupleAnswer from '../Objects/Answer/Couple_Answer';
import Topic from './../Objects/Topic/Topic.jsx';
import Header from './../Objects/Header/Header.jsx';
import Comment from './../Objects/Comment/Comment.jsx';
import Video from './../Objects/Video/Video.jsx';
import Next from './../Objects/Next/Next.jsx';
const Logic_Couples_4_4_OneColumn = () => {
    return (
        <div className={s.background}>
            <div className={[s.page, g.page_].join(' ')}>
                <Header />
                <div className={s.question_body}>
                    <div className={s.question_frame}>
                        <Question />
                    </div>
                    <div className={s.answers_frame}>
                        <p className={s.choose}><strong>Обери одну відповідь</strong></p>
                        <div className={s.answers}>
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

                                </tr>
                            </table>
                            <Next />
                            <Topic />
                            <Comment />
                            <Video />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logic_Couples_4_4_OneColumn;