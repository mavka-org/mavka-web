import React from "react";

export default props => (
    <button onClick={props.pushed} style={{
        backgroundColor: props.backColor,
        borderRadius: "5px",
        borderWidth: 1,
        width: props.width,
        marginLeft: props.marginLeft,
        height: props.height,
        color: props.color,
        fontSize: 14,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.08)",
        /*display: "flex",
        alignItems: "flex-end",
        textAlign: "center",*/
    }}>{props.number}</button>
);