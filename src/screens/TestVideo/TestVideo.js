import s from "../Templates/ABCDE/ABCDE.module.css";
import VideoCamera from "../Templates/Icon/VideoCamera";
import React from "react";

export default (props) => (
    <div className={s.video_explanation_frame} style={{
        display: !props.hidden ? "none" : "block"
    }}>
        <p><strong><VideoCamera/> Відеопояснення</strong></p>
        <div className={s.video}></div>
    </div>
)