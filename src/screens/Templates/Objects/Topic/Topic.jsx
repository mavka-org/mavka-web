import React from 'react';
import g from './../../Style.module.css';
import PointDown from './../../Icon/PointDown/PointDown';
class Topic extends React.Component {
    render() {
        return (
            <div className={g.topic_frame} style={{
                /*display: !this.props.hidden ? "none" : "block"*/
            }}>
                <p><strong><PointDown /> Тема:</strong></p>
                <div className={g.topic_frame_text}>{this.props.topic}</div>
            </div>
        );
    }
}

export default Topic;
