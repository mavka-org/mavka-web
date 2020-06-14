import React from 'react';
import g from './../../Style.module.css';
import Lamb from './../../Icon/Lamb/Lamb';
class Comment extends React.Component {
    render() {
        return (
            <div style={{
                display: !this.props.hidden ? "none" : "block"
            }}>
                <p><strong><Lamb /> Коментар:</strong></p>
                <div className={g.comment_frame_text} dangerouslySetInnerHTML={{ __html: this.props.comment }}></div>
            </div>
        );
    }
}
export default Comment;
