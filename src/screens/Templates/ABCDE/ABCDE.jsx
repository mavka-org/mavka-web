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
import TestHeader from "../../TestHeader";
import TestVideo from "../../TestVideo";
import TestComment from "../../TestComment";
import TestTopic from "../../TestTopic";
import TestQuestion from "../../TestQuestion";
import TestAnswer from "../../TestAnswer";
import TestResult from "../../TestResult";




class ABCDE extends Component {

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
                    <div className={s.question_form}>
                        <TestQuestion
                            question={data.getQuestion()}
                            active={this.state.active}
                        />
                        <TestTopic
                            topic={data.getTopic()}
                            hidden={hidden}
                        />
                        <TestComment
                            comment={data.getComment()}
                            hidden={hidden}
                        />
                        <TestVideo
                            hidden={hidden}
                        />
                    </div>

                    <div className={s.answers_frame}>
                        <p className={s.choose}><strong>Обери одну відповідь</strong></p>
                        <div className={s.answers}>
                            <TestAnswer
                                letter={"A"}
                                question={data.getQuestions()[0]}
                                explanation={data.getExplanations()[0]}
                                hidden={hidden}
                            />
                            <TestAnswer
                                letter={"Б"}
                                question={data.getQuestions()[1]}
                                explanation={data.getExplanations()[1]}
                                hidden={hidden}
                            />
                            <TestAnswer
                                letter={"В"}
                                question={data.getQuestions()[2]}
                                explanation={data.getExplanations()[2]}
                                hidden={hidden}
                            />
                            <TestAnswer
                                letter={"Г"}
                                question={data.getQuestions()[3]}
                                explanation={data.getExplanations()[3]}
                                hidden={hidden}
                            />
                            <TestAnswer
                                letter={"Д"}
                                question={data.getQuestions()[4]}
                                explanation={data.getExplanations()[4]}
                                hidden={hidden}
                            />

                            <TestResult
                                answered={this.state.answered}
                                callback={this.props.changeStatus}
                                number={this.state.active}
                            />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default ABCDE;