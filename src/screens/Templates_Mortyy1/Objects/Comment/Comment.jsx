import React from 'react';
import g from './../../Style.module.css';
import Lamb from './../../Icon/Lamb/Lamb';
class Comment extends React.Component {
    render() {
        return (
            <div className={g.comment_frame}>
                <p><strong><Lamb /> Коментар</strong></p>
                <div className={g.comment_frame_text}>Перед тим як читати варіанти відповідей, спросубй самостійно пояснити вживання розподілових знаків, а вже потім порівнюй їх із запропонованими.</div>
            </div>
        );
    }
}
export default Comment;