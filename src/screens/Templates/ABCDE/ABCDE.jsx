import React, {Component} from 'react';
import s from './ABCDE.module.css';
import QuestionNavPanel from "../../../UI/QuestionNavPanel";
import Strong from "../Icon/Strong";
import CorrectArrow from "../Icon/CorrectArrow";
import Incorrect from "../Icon/Incorrect";
import Party from "../Icon/Party";
import PointDown from "../Icon/PointDown";
import Lamb from "../Icon/Lamb";
import VideoCamera from "../Icon/VideoCamera";
import Markdown from "markdown-to-jsx";


class ABCDE extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: props.number,
            data: props.data,
            active: props.active,
        }
        console.log(props.data);
    }

    componentDidUpdate (prevProps) {
        if (this.props != prevProps) {
            this.setState({
                number: this.props.number,
                data: this.props.data,
                active: this.props.active
            })
        }
    }

    render() {
        const data = this.state.data;
        return (
            <div className={s.background}>
                <div className={s.page}>
                    <div className={s.question_header}>
                        <div className={s.title_bar}>
                            <p><strong><Strong />Практика</strong></p>
                            <p><strong>{data.getSubject()}</strong> {data.getYear()} {data.getSession()} сесія</p>
                            <button className={s.end}>Завершити</button>
                        </div>
                    </div>
                    <QuestionNavPanel
                        list={this.state.number}
                        callback={this.props.callback}
                        active={this.state.active}
                    />
                    <br/>
                    <div className={s.question_body}>

                        <div className={s.question_form}>
                            <div className={s.question_frame}>
                                <div className={s.title}><strong>Завдання {this.state.active}</strong></div>
                                <p><Markdown>{data.getQuestion()}</Markdown></p>
                            </div>
                            <div className={s.topic_frame}>
                                <p><strong><PointDown/> Тема:</strong></p>
                                <p className={s.topic_frame_text}>{data.getTopic()}</p>
                            </div>
                            <div className={s.comment_frame}>
                                <p><strong><Lamb/>Коментар</strong></p>
                                <p className={s.comment_frame_text}><Markdown>{data.getComment()}</Markdown></p>
                            </div>
                            <div className={s.video_explanation_frame}>
                                <p><strong><VideoCamera/> Відеопояснення</strong></p>
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
                                        <p className={s.answer_text}>{data.getQuestions()[0]}</p>
                                    </div>
                                    <p className={s.comment}>{data.getExplanations()[0]}</p>
                                </div>
                                <div className={s.answer}>
                                    <div className={s.answer_text_frame}>
                                        <div className={s.letter_choice}>
                                            <div className={s.icon}></div>
                                            <p><strong><CorrectArrow/> Б:</strong></p>
                                        </div>
                                        <p className={s.answer_text}>{data.getQuestions()[1]}</p>
                                    </div>
                                    <p className={s.comment}>{data.getExplanations()[1]}</p>
                                </div>
                                <div className={s.answer}>
                                    <div className={s.answer_text_frame}>
                                        <div className={s.letter_choice}>
                                            <div className={s.icon}></div>
                                            <p><strong><Incorrect/> В:</strong></p>
                                        </div>
                                        <p className={s.answer_text}>{data.getQuestions()[2]}</p>
                                    </div>
                                    <p className={s.comment}>{data.getExplanations()[2]}</p>
                                </div>
                                <div className={s.answer}>
                                    <div className={s.answer_text_frame}>
                                        <div className={s.letter_choice}>
                                            <div className={s.icon}></div>
                                            <p><strong>Г:</strong></p>
                                        </div>
                                        <p className={s.answer_text}>{data.getQuestions()[3]}</p>
                                    </div>
                                    <p className={s.comment}>{data.getExplanations()[3]}</p>
                                </div>
                                <div className={s.answer}>
                                    <div className={s.answer_text_frame}>
                                        <div className={s.letter_choice}>
                                            <div className={s.icon}></div>
                                            <p><strong>Д:</strong></p>
                                        </div>
                                        <p className={s.answer_text}>{data.getQuestions()[4]}</p>
                                    </div>
                                    <p className={s.comment}>{data.getExplanations()[4]}</p>
                                </div>
                                <div className={s.result_frame}>
                                    <div className={s.result}><strong>Правильно!</strong><Party/></div>
                                    <p className={s.stats}>80% учнів впоралися з цим завданням</p>
                                    <button class={s.btn}>Наступне питання</button>
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