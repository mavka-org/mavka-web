import React from 'react'
import s from './ABCDE_OneColumn.module.css';
import g from './../Style.module.css';
import Party from "../Icon/Party";
import Answer from '../Objects/Answer/Answer.jsx';
import Question from '../Objects/Question/Question';
import Topic from './../Objects/Topic/Topic.jsx';
import Header from './../Objects/Header/Header.jsx';
import Comment from './../Objects/Comment/Comment.jsx';
import Video from './../Objects/Video/Video.jsx';
import Next from './../Objects/Next/Next.jsx';
class ABCDE_OneColumn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedAnswers: props.checkedAnswers,
            number: props.number,
            data: props.data,
            active: props.active,
            answered: props.answered,
            currentAnswer: null
        }
        console.log(props.data);
    }

    componentDidUpdate(prevProps) {
        if (this.props != prevProps) {
            console.log('sos' + this.props.answered)
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

    updateCurrentAnswer = (answer) => {
        this.setState({
            currentAnswer: answer
        })
    }

    validateCurrentAnswer() {
        return (this.state.currentAnswer != "")
    }

    render() {

        const data = this.state.data;
        let hidden = this.state.answered && this.props.isPractice;
        let isNextAllowed = this.validateCurrentAnswer()

        return (
            <div>
                <div className={s.question_body}>
                    <Question
                        question={data.getQuestion()}
                        active={this.state.active}
                    />
                    <div className={s.answers_frame}>
                        <p className={g.choose}><strong>Обери одну відповідь</strong></p>
                        <div className={s.answers}>
                        <Answer
                                answered={this.state.answered}
                                letter={"A"}
                                question={data.getQuestions()[0]}
                                explanation={data.getExplanations()[0]}
                                hidden={hidden}
                                updateCurrentAnswer={this.updateCurrentAnswer}
                                currentAnswer={this.state.currentAnswer}
                                isCorrectAnswer={data.checkCorrect('А')}
                            />
                            <Answer
                                answered={this.state.answered}
                                letter={"Б"}
                                question={data.getQuestions()[1]}
                                explanation={data.getExplanations()[1]}
                                hidden={hidden}
                                updateCurrentAnswer={this.updateCurrentAnswer}
                                currentAnswer={this.state.currentAnswer}
                                isCorrectAnswer={data.checkCorrect('Б')}
                            />
                            <Answer
                                answered={this.state.answered}
                                letter={"В"}
                                question={data.getQuestions()[2]}
                                explanation={data.getExplanations()[2]}
                                hidden={hidden}
                                updateCurrentAnswer={this.updateCurrentAnswer}
                                currentAnswer={this.state.currentAnswer}
                                isCorrectAnswer={data.checkCorrect('В')}
                            />
                            <Answer
                                answered={this.state.answered}
                                letter={"Г"}
                                question={data.getQuestions()[3]}
                                explanation={data.getExplanations()[3]}
                                hidden={hidden}
                                updateCurrentAnswer={this.updateCurrentAnswer}
                                currentAnswer={this.state.currentAnswer}
                                isCorrectAnswer={data.checkCorrect('Г')}
                            />
                            <Answer
                                answered={this.state.answered}
                                letter={"Д"}
                                question={data.getQuestions()[4]}
                                explanation={data.getExplanations()[4]}
                                hidden={hidden}
                                updateCurrentAnswer={this.updateCurrentAnswer}
                                currentAnswer={this.state.currentAnswer}
                                isCorrectAnswer={data.checkCorrect('Д')}
                            />
                        </div>
                        <Next
                            isNextAllowe={isNextAllowed}
                            scores={this.props.scores}
                            answered={this.state.answered}
                            updateQuestion={this.props.updateQuestion}
                            number={this.state.active}
                            currentAnswer={this.state.currentAnswer}
                            updateAnswers={this.props.updateAnswers}
                            isPractice={this.props.isPractice}
                            scroll={this.props.scroll}
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
            </div>
        )
    }
}

export default ABCDE_OneColumn;
