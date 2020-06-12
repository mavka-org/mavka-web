import React from 'react';
import g from './../../Style.module.css';
import VideoCamera from './../../Icon/VideoCamera/VideoCamera';
class Comment extends React.Component {
    render() {
        return (
            <div className={g.video_explanation_frame}>
                <p><strong><VideoCamera /> Відеопояснення</strong></p>
                <div className={g.video}></div>
            </div>
        );
    }
}
export default Comment;