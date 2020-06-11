import React from 'react';
import Incorrect from './../../Icon/Incorrect/Incorrect';
class Answer extends React.Component {
    render() {
        return (
            <div className={g.answer}>
                <div className={g.answer_text_frame}>
                    <div className={g.letter_choice}>

                        <div className={g.check}>
                            <div className={g.symbol}><Incorrect /></div>
                            <div className={g.letter}><strong>Б:</strong></div>
                        </div>
                    </div>
                    <div className={g.answer_text}>коми 4 і 5 — при відокремленій прикладці</div>
                </div>
                <div className={g.comment}>Пояснення правильне, "прекрасна муза Калліопа" - прикладка, яка відокремлюється комами, бо стоїть після означуваного слова "мати".</div>
            </div>
        );
    }
}

export default Question;