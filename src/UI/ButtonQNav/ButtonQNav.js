import React from "react";
import g from './../../screens/Templates/Style.module.css';
export default props => (
    <button className={g.btnqnav} onClick={props.pushed} style={{
        backgroundColor: props.backColor,
        borderRadius: "5px",
        borderWidth: 1,
        width: props.width,
        marginLeft: props.marginLeft,
        height: props.height,
        color: props.color,
        fontSize: 18,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.08)",
        
        
    }}>{props.number}</button>
);