import s from "../Templates/ABCDE/ABCDE.module.css";
import React from "react";

export default (props) => (
<div className={s.background}>
    <div className={s.page}>
        {props.children}
    </div>
</div>
)