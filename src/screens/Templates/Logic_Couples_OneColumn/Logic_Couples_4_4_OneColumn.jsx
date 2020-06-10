import React from 'react'
import s from './Logic_Couples_4_4_OneColumn.module.css'
const Logic_Couples_4_4_OneColumn = () => {
    return (
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
                    <div className={s.question_frame}>
                        <div className={s.title}><strong>Завдання 12</strong></div>
                        <p>Прочитайте речення (цифра позначає попередній розділовий знак)</p>
                        <div className={s.result_frame}>
                            <p className={s.result}><strong>Правильно!</strong></p>
                            <p className={s.stats}>80% учнів впоралися з цим завданням</p>
                            <button class={s.btn}>Наступне питання</button>
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
                                <div className={s.number}><strong>1:</strong></div>
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
                                <div className={s.number}><strong>1:</strong></div>
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
                                <div className={s.number}><strong>1:</strong></div>
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
                                <div className={s.number}><strong>1:</strong></div>
                                <div className={s.answer_text_frame}>
                                    <div className={s.letter_choice}>
                                        <div className={s.icon}></div>
                                        <p><strong>А:</strong></p>
                                    </div>
                                    <p className={s.answer_text}> коми 1 і 2 — при відокремленій обставині</p>
                                </div>
                                <p className={s.comment}>Сполука "ударивши по золотих струнах своєї кіфари" — відокремлена обставина, виражена дієприслівниковим зворотом, пояснення правильне.</p>
                            </div>
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
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logic_Couples_4_4_OneColumn;