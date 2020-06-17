import React from 'react';
import s from './Open.module.css'
import g from './../Style.module.css';
import Question from '../Objects/Question/Question.jsx';
import Topic from './../Objects/Topic/Topic.jsx';
import Header from './../Objects/Header/Header.jsx';
import Comment from './../Objects/Comment/Comment.jsx';
import Video from './../Objects/Video/Video.jsx';
import Next from './../Objects/Next/Next.jsx';
class Open extends React.Component {
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
        console.log(this.state.data.evaluate(this.state.currentAnswer))

        const data = this.state.data;
        let hidden = this.state.answered;

        return (
            <div>
                <div className={s.question_body}>
                    <Question
                        question={data.getQuestion()}
                        active={this.state.active}
                        />
                    <div className={s.main_answers}>
                        <p><strong>Впиши відповідь на питання:</strong> </p>
                        <div className={s.answers_frame}>
                            <div className={s.answer}>
                                <div className={s.question}>
                                    <p className={s.variant}><div className={s.check}></div><div className={s.number}></div>{data.getQuestion()}</p>
                                    <div className={s.comment}>
                                        {data.getComment()}
                                    </div>
                                    <input className={s.inp}></input>
                                    <div className={s.correct_answer}>
                                        <div className={s.correct_number}><strong>Правильна відповідь: </strong>{data.getOpenAnswer()}</div>
                                    </div>
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
        )
    }
}

export default Open;
