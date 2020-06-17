import React from 'react';
import CheckAnswerIcon from '../../Icon/CheckAnswerIcon';
import g from './../../Objects/Answer/Answer.module.css';
class Answer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentAnswer: props.currentAnswer,
            answered: props.answered
        }
    }

    componentDidUpdate(prevProps) {
        document.getElementById("FAKE1").click();
        if (this.props != prevProps) {
            this.setState({
                currentAnswer: this.props.currentAnswer,
                answered: this.props.answered
            })
        }
    }

    render() {
        //console.log(this.state.currentAnswer + " " +  this.props.letter + " " + this.props.isCorrectAnswer);
        let isUserAnswer = !(this.props.letter.localeCompare(this.state.currentAnswer));
        //console.log(isUserAnswer);
        return (
            <div onClick={()=>{
                this.props.updateCurrentAnswer(this.props.letter, this.props.index);
            }}className={(g.answer + (this.state.currentAnswer == this.props.letter ? (" " + g.answer_answered) : ""))}>
                <div className={g.answer_text_frame}>
                    <div className={g.letter_choice}>

                        <div className={g.check}>
                            <div className={g.symbol} style={{
                                display: !this.props.hidden ? "none" : "block"
                                }}> <CheckAnswerIcon 
                                        isCorrectAnswer={this.props.isCorrectAnswer}
                                        isUserAnswer={isUserAnswer}
                                    /></div>
                            <div className={g.letter}><strong>{this.props.letter}:</strong></div>
                        </div>
                    </div>
                    <div className={g.answer_text} dangerouslySetInnerHTML={{ __html: this.props.question }}></div>
                </div>
                <div className={g.comment} dangerouslySetInnerHTML={{ __html: this.props.explanation }} style={{
                    display: !this.props.hidden ? "none" : "block"
                }}></div>
            </div>
        );
    }
}

export default Answer;
