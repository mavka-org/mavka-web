import React from 'react';
import Incorrect from './../../Icon/Incorrect/Incorrect';
import Correct from './../../Icon/Correct/Correct'
import g from './../../Objects/Answer/Answer.module.css';
class Answer extends React.Component {
    render() {
        return (
            <div className={g.answer}>
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
                    /*display: !this.props.hidden ? "none" : "block"*/
                }}></div>
            </div>
        );
    }
}

export default Answer;
