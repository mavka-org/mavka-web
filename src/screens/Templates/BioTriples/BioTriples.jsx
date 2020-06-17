import React from 'react';
import s from './BioTriples.module.css';
import g from './../Style.module.css';
import Header from '../Objects/Header/Header';
import Answer from '../Objects/Answer/Answer';
import Question from '../Objects/Question/Question';
import Next from '../Objects/Next/Next';
import Topic from '../Objects/Topic/Topic';
import Comment from '../Objects/Comment/Comment';
import Video from '../Objects/Video/Video';

class BioTriples extends React.Component {
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
                currentAnswer: ["", "", ""]
            })
            return(<div></div>)
        }

        let hidden = this.state.answered && this.props.isPractice
        return (
            <div>
                <Question 
                    question={data.getBio3_question()}
                    active={this.state.active}
                />
                <div style={{marginBottom:20}}><strong>Обери одну відповідь до кожнолого з тверджень:</strong></div>
                <div className={s.question_body}>
                    <div className={s.answers}>
                        <div className={s.title_column}>{data.getBio3_firstquestion().question}</div>
                        <Answer />
                            answered={this.state.answered}
                            letter={"A"}
                            question={data.getBio3_firstquestion().firstAnswer}
                            explanation={data.getBio3_firstquestion().firstExplain}
                            hidden={hidden}
                            updateCurrentAnswer={this.updateCurrentAnswer}
                            currentAnswer={this.state.currentAnswer}
                            isCorrectAnswer={data.checkCorrect('А')}
                        <Answer />
                        <Answer />
                    </div>
                    <div className={s.answers}>
                        <div className={s.title_column}>Органела є</div>
                        <Answer />
                        <Answer />
                        <Answer />
                    </div>
                    <div className={s.answers}>
                        <div className={s.title_column}>Органела є</div>
                        <Answer />
                        <Answer />
                        <Answer />
                    </div>
                </div>
                <Next />
                <Topic />
                <Comment />
                <Video />
            </div>
        );
    }
}

export default BioTriples;