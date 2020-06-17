import React from 'react';
import s from './Geo_History_3_7.module.css';
import g from './../Style.module.css';
import Header from '../Objects/Header/Header';
import Answer from '../Objects/Answer/Answer';
import Question from '../Objects/Question/Question';
import Next from '../Objects/Next/Next';
import Topic from '../Objects/Topic/Topic';
import Comment from '../Objects/Comment/Comment';
import Video from '../Objects/Video/Video';

class Geo_History_3_7 extends React.Component {
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
        return (
            <div>
                <div style={{ marginBottom: 20 }}><strong>Обери ТРИ відповіді:</strong></div>
                <div className={s.question_body}>
                    <div className={s.answers}>
                        <Answer
                            answered={this.state.answered}
                            letter={"1"}
                            question={data.getQuestions()[0]}
                            explanation={data.getExplanations()[0]}
                            hidden={hidden}
                            updateCurrentAnswer={this.props.updateCurrentAnswer}
                            currentAnswer={this.state.currentAnswer}
                            isCorrectAnswer={data.checkCorrect('1')}
                        />
                        <Answer
                            answered={this.state.answered}
                            letter={"1"}
                            question={data.getQuestions()[0]}
                            explanation={data.getExplanations()[0]}
                            hidden={hidden}
                            updateCurrentAnswer={this.props.updateCurrentAnswer}
                            currentAnswer={this.state.currentAnswer}
                            isCorrectAnswer={data.checkCorrect('1')}
                        />
                        <Answer
                            answered={this.state.answered}
                            letter={"1"}
                            question={data.getQuestions()[0]}
                            explanation={data.getExplanations()[0]}
                            hidden={hidden}
                            updateCurrentAnswer={this.props.updateCurrentAnswer}
                            currentAnswer={this.state.currentAnswer}
                            isCorrectAnswer={data.checkCorrect('1')}
                        />
                    </div>
                    <div className={s.answers}>
                        <Answer
                            answered={this.state.answered}
                            letter={"1"}
                            question={data.getQuestions()[0]}
                            explanation={data.getExplanations()[0]}
                            hidden={hidden}
                            updateCurrentAnswer={this.props.updateCurrentAnswer}
                            currentAnswer={this.state.currentAnswer}
                            isCorrectAnswer={data.checkCorrect('1')}
                        />
                        <Answer
                            answered={this.state.answered}
                            letter={"1"}
                            question={data.getQuestions()[0]}
                            explanation={data.getExplanations()[0]}
                            hidden={hidden}
                            updateCurrentAnswer={this.props.updateCurrentAnswer}
                            currentAnswer={this.state.currentAnswer}
                            isCorrectAnswer={data.checkCorrect('1')}
                        />
                        <Answer
                            answered={this.state.answered}
                            letter={"1"}
                            question={data.getQuestions()[0]}
                            explanation={data.getExplanations()[0]}
                            hidden={hidden}
                            updateCurrentAnswer={this.props.updateCurrentAnswer}
                            currentAnswer={this.state.currentAnswer}
                            isCorrectAnswer={data.checkCorrect('1')}
                        />
                        <Answer
                            answered={this.state.answered}
                            letter={"1"}
                            question={data.getQuestions()[0]}
                            explanation={data.getExplanations()[0]}
                            hidden={hidden}
                            updateCurrentAnswer={this.props.updateCurrentAnswer}
                            currentAnswer={this.state.currentAnswer}
                            isCorrectAnswer={data.checkCorrect('1')}
                        />
                    </div>
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
        );
    }
}

export default Geo_History_3_7;