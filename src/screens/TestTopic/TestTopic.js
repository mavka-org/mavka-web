import s from "../Templates/ABCDE/ABCDE.module.css";
import PointDown from "../Templates/Icon/PointDown";
import React from "react";

export default (props) => (
    <div className={s.topic_frame} style={{
        display: !props.hidden ? "none" : "block"
    }}>
        <p><strong><PointDown/>Тема:</strong></p>
        <p className={s.topic_frame_text}>{props.topic}</p>
    </div>
)