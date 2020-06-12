import s from "../Templates/ABCDE/ABCDE.module.css";
import Strong from "../Templates/Icon/Strong";
import React from "react";

export default (props) => (
    <div className={s.question_header}>
        <div className={s.title_bar}>
            <p><strong><Strong />Практика</strong></p>
            <p><strong>{props.subject}</strong> {props.year} {props.session} сесія</p>
            <button className={s.end}>Завершити</button>
        </div>
    </div>
);