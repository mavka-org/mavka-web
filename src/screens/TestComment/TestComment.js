import s from "../Templates/ABCDE/ABCDE.module.css";
import Lamb from "../Templates/Icon/Lamb";
import React from "react";

export default (props) => (
    <div className={s.comment_frame} style={{
        display: !props.hidden ? "none" : "block"
    }}>
        <p><strong><Lamb/>Коментар</strong></p>
        <p dangerouslySetInnerHTML={{__html: props.comment}} className={s.comment_frame_text}></p>
    </div>
)