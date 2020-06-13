import React from 'react';
import s from './Double_Open.module.css';
import g from './../Style.module.css';
import Incorrect from "../Icon/Incorrect";
import Party from "../Icon/Party";
import Question from '../Objects/Question/Question.jsx';
import Topic from './../Objects/Topic/Topic.jsx';
import Header from './../Objects/Header/Header.jsx';
import Comment from './../Objects/Comment/Comment.jsx';
import Video from './../Objects/Video/Video.jsx';
import Next from './../Objects/Next/Next.jsx';

class DoubleOpen extends React.Component {
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
                        <Question
                            question={data.getQuestion()}
                            active={this.state.active}
                            />
                        <div className={s.main_answers}>
                            <p><strong>Впиши відповіді на питання:</strong> </p>
                            <div className={s.answers_frame}>
                                <div className={s.answer}>
                                    <div className={s.variant}>
                                        <div className={s.number}><div className={s.icon}><Incorrect /></div><strong>1:</strong></div><div>{data.getDoubleOpenSubquestion()[0]}</div></div>
                                    <div className={s.comment}>
                                        <div>{data.getDoubleOpenExplanations()[0]}</div>
                                    </div>
                                    <input className={s.inp}></input>
                                    <div className={s.correct_answer}>
                                        <div className={s.correct_number}><strong>Правильна відповідь: </strong>{data.getDoubleOpenAnswers()[0]}</div>
                                    </div>
                                </div>
                                <div className={s.answer}>
                                    <div className={s.variant}>
                                        <div className={s.number}><div className={s.icon}><Incorrect /></div><strong>1:</strong></div><div>{data.getDoubleOpenSubquestion()[1]}</div></div>
                                    <div className={s.comment}>
                                        <div>{data.getDoubleOpenExplanations()[1]}</div>
                                    </div>
                                    <input className={s.inp}></input>
                                    <div className={s.correct_answer}>
                                        <div className={s.correct_number}><strong>Правильна відповідь: </strong>{data.getDoubleOpenAnswers()[1]}</div>
                                    </div>
                                </div>
                            </div>

                            <Next />

                            <Topic
                                topic={data.getTopic()}
                                />
                            <Comment
                                comment={data.getComment()}
                                />
                            <Video />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default DoubleOpen;
