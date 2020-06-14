import React from 'react';
import Incorrect from './../../Icon/Incorrect/Incorrect';
import Correct from './../../Icon/Correct/Correct'
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
        if (this.props != prevProps) {
            this.setState({
                currentAnswer: this.props.currentAnswer,
                answered: this.props.answered
            })
        }
    }

    render() {
        console.log(this.state.currentAnswer + " " +  this.props.letter);
        return (
            <div onClick={()=>{
                this.props.updateCurrentAnswer(this.props.letter);
            }}className={!this.state.answered ? (g.answer + (this.state.currentAnswer == this.props.letter ? (" " + g.answer_answered) : "")) : ""}>
                <div className={g.answer_text_frame}>
                    <div className={g.letter_choice}>

                        <div className={g.check}>
                            <div className={g.symbol}><Incorrect /></div>
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
