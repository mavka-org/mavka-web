import React, {Component} from 'react'
import s from './Logic_couples_4_4.module.css'
import Strong from "../Icon/Strong";
import Correct from "../Icon/Correct";
import Like from "../Icon/Like";
import PointDown from "../Icon/PointDown";
import Lamb from "../Icon/Lamb";
import VideoCamera from "../Icon/VideoCamera";
import TestHeader from "../../TestHeader";
import QuestionNavPanel from "../../../UI/QuestionNavPanel";
import TestQuestion from "../../TestQuestion";
import TestTopic from "../../TestTopic";
import TestComment from "../../TestComment";
import TestVideo from "../../TestVideo";
import TestAnswer from "../../TestAnswer";
import TestResult from "../../TestResult";

class Logic_couples_4_4 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: props.number,
            data: props.data,
            active: props.active,
            answered: props.answered
        }
        console.log(props.data);
    }

    componentDidUpdate (prevProps) {
        if (this.props != prevProps) {
            this.setState({
                number: this.props.number,
                data: this.props.data,
                active: this.props.active,
                answered: this.props.answered
            })
        }
    }

    render() {
        const data = this.state.data;
        let hidden = this.state.answered;
        return (
            <div>
                <TestHeader
                    subject={data.getSubject()}
                    year={data.getYear()}
                    session={data.getSession()}
                />
                <QuestionNavPanel
                    list={this.state.number}
                    callback={this.props.callback}
                    active={this.state.active}
                />
                <br/>
                <div className={s.question_body}>
                    <TestQuestion
                        question={data.getQuestion()}
                        active={this.state.active}
                    />
                    <div className={s.answers_frame}>
                        <p className={s.choose}><strong>Обери одну відповідь</strong></p>
                        <div className={s.answers}>
                            <div className={s.answer}>
                                <div className={s.number}><sub><Correct/></sub>&nbsp;<strong>1:</strong></div>
                                <div className={s.answer_text_frame}>
                                    <div className={s.letter_choice}>
                                        <div className={s.icon}></div>
                                        <p><strong>А:</strong></p>
                                    </div>
                                    <p className={s.answer_text}> коми 1 і 2 — при відокремленій обставині</p>
                                </div>
                                <p className={s.comment}>Сполука "ударивши по золотих струнах своєї кіфари" —
                                    відокремлена обставина, виражена дієприслівниковим зворотом, пояснення
                                    правильне.</p>
                            </div>
                            <div className={s.answer}>
                                <div className={s.number}><Correct/><strong>2:</strong></div>
                                <div className={s.answer_text_frame}>
                                    <div className={s.letter_choice}>
                                        <div className={s.icon}></div>
                                        <p><strong>А:</strong></p>
                                    </div>
                                    <p className={s.answer_text}> коми 1 і 2 — при відокремленій обставині</p>
                                </div>
                                <p className={s.comment}>Сполука "ударивши по золотих струнах своєї кіфари" —
                                    відокремлена обставина, виражена дієприслівниковим зворотом, пояснення
                                    правильне.</p>
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
                                <p className={s.comment}>Сполука "ударивши по золотих струнах своєї кіфари" —
                                    відокремлена обставина, виражена дієприслівниковим зворотом, пояснення
                                    правильне.</p>
                            </div>
                            <div className={s.answer}>
                                <div className={s.number}><Correct/><strong>4:</strong></div>
                                <div className={s.answer_text_frame}>
                                    <div className={s.letter_choice}>
                                        <div className={s.icon}></div>
                                        <p><strong>А:</strong></p>
                                    </div>
                                    <p className={s.answer_text}> коми 1 і 2 — при відокремленій обставині</p>
                                </div>
                                <p className={s.comment}>Сполука "ударивши по золотих струнах своєї кіфари" —
                                    відокремлена обставина, виражена дієприслівниковим зворотом, пояснення
                                    правильне.</p>
                            </div>
                        </div>
                        <div className={s.table}>
                            <table className={s.select_answer}>
                                <tr>
                                    <th></th>
                                    <th>А</th>
                                    <th>Б</th>
                                    <th>В</th>
                                    <th>Г</th>
                                </tr>
                                <tr>
                                    <th className={s.r}>1</th>
                                    <td>
                                        <label>
                                            <input type="radio" value="1a" name="a[1]" className={s.q_radio}></input>
                                            <span className={s.marker}></span>
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            <input type="radio" value="1b" name="a[1]" className={s.q_radio}></input>
                                            <span className={s.marker}></span>
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            <input type="radio" value="1c" name="a[1]" className={s.q_radio}></input>
                                            <span className={s.marker}></span>
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            <input type="radio" value="1d" name="a[1]" className={s.q_radio}></input>
                                            <span className={s.marker}></span>
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <th className={s.r}>2</th>
                                    <td>
                                        <label>
                                            <input type="radio" value="2a" name="a[2]" className={s.q_radio}></input>
                                            <span className={s.marker}></span>
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            <input type="radio" value="2b" name="a[2]" className={s.q_radio}></input>
                                            <span className={s.marker}></span>
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            <input type="radio" value="2c" name="a[2]" className={s.q_radio}></input>
                                            <span className={s.marker}></span>
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            <input type="radio" value="2d" name="a[2]" className={s.q_radio}></input>
                                            <span className={s.marker}></span>
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <th className={s.r}>3</th>
                                    <td>
                                        <label>
                                            <input type="radio" value="3a" name="a[3]" className={s.q_radio}></input>
                                            <span className={s.marker}></span>
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            <input type="radio" value="3b" name="a[3]" className={s.q_radio}></input>
                                            <span className={s.marker}></span>
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            <input type="radio" value="3c" name="a[3]" className={s.q_radio}></input>
                                            <span className={s.marker}></span>
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            <input type="radio" value="3d" name="a[3]" className={s.q_radio}></input>
                                            <span className={s.marker}></span>
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <th className={s.r}>4</th>
                                    <td>
                                        <label>
                                            <input type="radio" value="4a" name="a[4]" className={s.q_radio}></input>
                                            <span className={s.marker}></span>
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            <input type="radio" value="4b" name="a[4]" className={s.q_radio}></input>
                                            <span className={s.marker}></span>
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            <input type="radio" value="4c" name="a[4]" className={s.q_radio}></input>
                                            <span className={s.marker}></span>
                                        </label>
                                    </td>
                                    <td>
                                        <label>
                                            <input type="radio" value="4d" name="a[4]" className={s.q_radio}></input>
                                            <span className={s.marker}></span>
                                        </label>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className={s.result_frame}>
                            <p className={s.result}><strong>Правильно!<Like/></strong></p>
                            <p className={s.stats}>80% учнів впоралися з цим завданням</p>
                            <button className={s.btn}>Наступне питання</button>
                        </div>
                        <div className={s.topic_frame}>
                            <p><strong><PointDown/>Тема:</strong></p>
                            <p className={s.topic_frame_text}>Орфомеопія</p>
                        </div>
                        <div className={s.comment_frame}>
                            <p><strong><Lamb/>Коментар</strong></p>
                            <p className={s.comment_frame_text}>Перед тим як читати варіанти відповідей, спросубй
                                самостійно пояснити вживання розподілових знаків, а вже потім порівнюй їх із
                                запропонованими.</p>
                        </div>
                        <div className={s.video_explanation_frame}>
                            <p><strong><VideoCamera/>Відеопояснення</strong></p>
                            <div className={s.video}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Logic_couples_4_4;