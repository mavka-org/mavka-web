import React from 'react';
import g from './../../Style.module.css';
class Question extends React.Component {
    render() {
        return (
            <div>
                <div className={g.title} style={{marginBottom:10}}><strong>Завдання {this.props.active}</strong></div>
                <div style={{marginBottom:30}} dangerouslySetInnerHTML={{__html: this.props.question}}></div>
            </div>
        );
    }
}

export default Question;
