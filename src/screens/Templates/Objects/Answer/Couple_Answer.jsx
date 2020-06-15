import React from 'react';
import Incorrect from '../../Icon/CheckAnswerIcon/CheckAnswerIcon';
import Correct from './../../Icon/Correct/Correct'
import g from './../../Objects/Answer/Couple_Answer.module.css';
class CoupleAnswer extends React.Component {
    render() {
        return (
            <div className={g.answer}>
                <div className={g.answer_text_frame}>
                    <div className={g.letter_choice}>
                        <div className={g.check}>
                            <div className={g.symbol}><Incorrect /></div>
                            <div className={g.number}><strong>{this.props.number}:</strong></div>
                            <div className={g.answer_text}>{this.props.subquestion}</div>
                        </div>
                        <div className={g.check}>
                            <div className={g.letter} style={{ marginLeft: 30 }}><strong>{this.props.correctLetter}:</strong></div>
                            <div className={g.answer_text}>{this.props.subanswer}</div>
                        </div>
                    </div>

                </div>
                <div className={g.comment}>{this.props.explanation}</div>
            </div>
        );
    }
}

export default CoupleAnswer;
