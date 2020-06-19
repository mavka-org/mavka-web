import React from 'react';
import Incorrect from '../../Icon/CheckAnswerIcon/CheckAnswerIcon';
import Correct from './../../Icon/Correct/Correct'
import g from './../../Objects/Answer/Couple_Answer.module.css';
import { FiTrash } from 'react-icons/fi';
import CheckAnswerIcon from '../../Icon/CheckAnswerIcon';
class CoupleAnswer extends React.Component {

    getDiv() {
        
        if(this.props.subanswer.length > 0) {
            if(this.props.hidden) {
                return(
                <div className={g.check}>
                    <div className={g.answer_text}>{this.props.subanswer}</div>
                </div>)
            }
            else {
                return(
                <div>
                    <div className={g.check}>
                        <div className={g.letter} style={{ marginLeft: 30 }}><strong>{this.props.correctLetter}:</strong></div>
                        <div className={g.answer_text}>{this.props.subanswer}</div>
                    </div>
                    <div className={g.comment} dangerouslySetInnerHTML={{ __html: this.props.explanation }}></div>
                </div>)
            }
        }
        else {
            return <div/>
        }
    }

    render() {
        return (
            <div className={g.answer_withouthover} style={{
                border: (!this.props.hidden && this.props.isCorrectAnswer || this.props.hidden && this.props.subanswer.length > 0) ? "1px black solid" : "",
                opacity: (!this.props.hidden && !this.props.isCorrectAnswer) ? "70%" : "100%"
                }}>
                <div className={g.answer_text_frame}>
                    <div className={g.letter_choice}>
                        <div className={g.check}>

                            <div className={g.symbol} style={{
                                display: this.props.hidden ? "none" : "block",
                                }}> <CheckAnswerIcon 
                                    isCorrectAnswer={true}
                                    isUserAnswer={this.props.isCorrectAnswer}
                                    /></div>
                            <div className={g.number}><strong>{this.props.number}:</strong></div>
                            <div className={g.answer_text}>{this.props.subquestion}</div>
                        </div>
                        {this.getDiv()}
                        
                    </div>
                </div>
                
            </div>
        );
    }
}
/*
<div className={g.check}>
                            <div className={g.letter} style={{ marginLeft: 30 }}><strong>{this.props.correctLetter}:</strong></div>
                            <div className={g.answer_text}>{this.props.subanswer}</div>
                        </div>

                        <div className={g.comment}>{this.props.explanation}</div>
*/



export default CoupleAnswer;
