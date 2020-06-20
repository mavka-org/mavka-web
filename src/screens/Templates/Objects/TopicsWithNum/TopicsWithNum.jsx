import React from 'react';
import g from './../../Style.module.css';
import PointDown from './../../Icon/PointDown/PointDown';
class Topic extends React.Component {

    getTopicsList() {
        let topics = this.props.topics;
        if(topics == null || typeof topics == 'undefined' || topics.length == 0) {
            return <div>pusto</div>
        }


        let list = [];
        for (var key in topics) {
            list.push(<div className={g.topic_frame_text}>· {key} - {topics[key]}</div>);
        }

        return list;
    }
    render() {
        return (
            <div className={g.topic_frame} style={{
                display: this.props.hidden ? "none" : "block"
            }}>
                <p><strong><PointDown /> Теми:</strong></p>
                {this.getTopicsList()}
            </div>
        );
    }
}

export default Topic;
