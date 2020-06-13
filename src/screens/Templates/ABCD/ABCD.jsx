import React from 'react'
import s from './ABCD.module.css'
import g from './../Style.module.css';
import Party from "../Icon/Party";
import Question from '../Objects/Question/Question.jsx';
import Answer from '../Objects/Answer/Answer.jsx';
import Topic from './../Objects/Topic/Topic.jsx';
import Header from './../Objects/Header/Header.jsx';
import Comment from './../Objects/Comment/Comment.jsx';
import Video from './../Objects/Video/Video.jsx';
import Next from './../Objects/Next/Next.jsx';
import { Component } from 'react';

class ABCD extends Component {
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

    componentDidUpdate(prevProps) {
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
            <div className={g.background}>
                <div className={[s.page, g.page_].join(' ')}>
                    <Header
                        subject={data.getSubject()}
                        year={data.getYear()}
                        session={data.getSession()}
                        list={this.state.number}
                        callback={this.props.callback}
                        active={this.state.active}
                        />
                    <div className={s.question_body}>
                        <div className={s.question_form}>
                            <Question
                                question={data.getQuestion()}
                                active={this.state.active}
                                />
                            <Topic
                                topic={data.getTopic()}
                                />
                            <Comment
                                comment={data.getComment()}
                                />
                            <Video />
                        </div>

                        <div className={s.answers_frame}>
                            <p className={g.choose}><strong>Обери одну відповідь</strong></p>
                            <div className={s.answers}>
                                <Answer
                                    letter={"A"}
                                    question={data.getQuestions()[0]}
                                    explanation={data.getExplanations()[0]}
                                    hidden={hidden}
                                />
                                <Answer
                                    letter={"Б"}
                                    question={data.getQuestions()[1]}
                                    explanation={data.getExplanations()[1]}
                                    hidden={hidden}
                                />
                                <Answer
                                    letter={"В"}
                                    question={data.getQuestions()[2]}
                                    explanation={data.getExplanations()[2]}
                                    hidden={hidden}
                                />
                                <Answer
                                    letter={"Г"}
                                    question={data.getQuestions()[3]}
                                    explanation={data.getExplanations()[3]}
                                    hidden={hidden}
                                />
                            </div>
                            <Next />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ABCD;
