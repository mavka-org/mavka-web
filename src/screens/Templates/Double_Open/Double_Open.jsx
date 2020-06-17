import React from 'react';
import s from './Double_Open.module.css';
import g from './../Style.module.css';
import Party from "../Icon/Party";
import Question from './../Objects/Question/Question.jsx';
import Input_Answer from './../Objects/Answer/Input_Answer';
import Topic from './../Objects/Topic/Topic.jsx';
import Header from './../Objects/Header/Header.jsx';
import Comment from './../Objects/Comment/Comment.jsx';
import Video from './../Objects/Video/Video.jsx';
import Next from './../Objects/Next/Next.jsx';

class Double_Open extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedAnswers: props.checkedAnswers,
            number: props.number,
            data: props.data,
            active: props.active,
            answered: props.answered,
            currentAnswer: props.currentAnswer
        }
        console.log(props.data);
    }

    componentDidUpdate(prevProps) {
        if (this.props != prevProps) {
            this.setState({
                checkedAnswers: this.props.checkedAnswers,
                number: this.props.number,
                data: this.props.data,
                active: this.props.active,
                answered: this.props.answered,
                currentAnswer: this.props.currentAnswer
            })
        }
    }

    updateCurrentAnswer = (answer, index) => {

        let curAnswer = this.state.currentAnswer
        curAnswer[index] = answer

        this.setState({
            currentAnswer: curAnswer
        })
    }

    render() {

        if(typeof this.state.currentAnswer == "undefined"){
            this.setState({
                currentAnswer: ["", ""]
            })
            return(<div></div>)
        }

        const data = this.state.data;
        let hidden = this.state.answered && this.props.isPractice;

        return (
            <div className={s.question_body}>
                <Question
                    question={data.getQuestion()}
                    active={this.state.active}
                    />
                <div className={s.main_answers}>
                    <p><strong>Впиши відповіді на питання:</strong> </p>

                    <div className={s.answers_frame}>

                        <Input_Answer
                            answered={this.state.answered}
                            number={"1"}
                            subquestion={data.getDoubleOpenSubquestion()[0]}
                            explanation={data.getDoubleOpenExplanations()[0]}
                            correctAnswer={data.getDoubleOpenAnswers()[0]}
                            hidden={hidden}
                            updateCurrentAnswer={this.updateCurrentAnswer}
                            currentAnswer={this.state.currentAnswer[0]}
                            isCorrectAnswer={true}
                            />

                        <Input_Answer
                            answered={this.state.answered}
                            number={"2"}
                            subquestion={data.getDoubleOpenSubquestion()[1]}
                            explanation={data.getDoubleOpenExplanations()[1]}
                            correctAnswer={data.getDoubleOpenAnswers()[1]}
                            hidden={hidden}
                            updateCurrentAnswer={this.updateCurrentAnswer}
                            currentAnswer={this.state.currentAnswer[1]}
                            isCorrectAnswer={true}
                            />
                    </div>

                    <Next
                        answered={this.state.answered}
                        updateQuestion={this.props.updateQuestion}
                        number={this.state.active}
                        currentAnswer={this.state.currentAnswer}
                        updateAnswers={this.props.updateAnswers}
                        isPractice={this.props.isPractice}
                        />

                    <Topic
                        topic={data.getTopic()}
                        hidden={hidden}
                        />
                    <Comment
                        comment={data.getComment()}
                        hidden={hidden}
                        />
                    <Video
                        hidden={hidden}
                        />
                </div>

            </div>
        )
    }
}

export default Double_Open;
