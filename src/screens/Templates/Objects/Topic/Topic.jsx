import React from 'react';
import g from './../../Style.module.css';
import PointDown from './../../Icon/PointDown/PointDown';
class Topic extends React.Component {
    render() {
        return (
            <div className={g.topic_frame}>
                <p><strong><PointDown /> Тема:</strong></p>
                <div className={g.topic_frame_text}>Орфомеопія</div>
            </div>
        );
    }
}

export default Topic;