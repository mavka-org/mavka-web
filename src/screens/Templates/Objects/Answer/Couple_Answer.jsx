import React from 'react';
import Incorrect from './../../Icon/Incorrect/Incorrect';
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
                            <div className={g.number}><strong>1:</strong></div>
                        </div>
                        <div className={g.letter} style={{ marginLeft: 30 }}><strong>Б:</strong></div>
                    </div>
                    <div className={g.answer_text}>коми 4 і 5 — при відокремленій прикладці</div>
                </div>
                <div className={g.comment}>Пояснення правильне, "прекрасна муза Калліопа" - прикладка, яка відокремлюється комами, бо стоїть після означуваного слова "мати".</div>
            </div>
        );
    }
}

export default CoupleAnswer;