import s from "../Templates/ABCDE/ABCDE.module.css";
import React from "react";

export default props => (
    <div className={s.question_frame}>
        <div className={s.title}><strong>Завдання {props.active}</strong></div>
        <p dangerouslySetInnerHTML={{__html: props.question}}></p>
    </div>
)