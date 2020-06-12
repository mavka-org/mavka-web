import s from "../Templates/ABCDE/ABCDE.module.css";
import React from "react";

export default props => (
    <div className={s.answer}>
        <div className={s.answer_text_frame}>
            <div className={s.letter_choice}>
                <div className={s.icon}></div>
                <p><strong>{props.letter}:</strong></p>
            </div>
            <p className={s.answer_text} dangerouslySetInnerHTML={{__html: props.question}}></p>
        </div>
        <p className={s.comment} dangerouslySetInnerHTML={{__html: props.explanation}} style={{
            display: !props.hidden ? "none" : "block"
        }}></p>
    </div>
)