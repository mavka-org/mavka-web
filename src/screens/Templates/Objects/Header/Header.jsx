import React from 'react';
import g from './../../Style.module.css';
import Strong from './../../Icon/Strong/Strong';
import QuestionNavPanel from "../../../../UI/QuestionNavPanel";
class Header extends React.Component {
    render() {
        return (
            <div>
                <div className={g.question_header}>
                    <div className={g.title_bar}>
                        <p><strong><Strong />Практика</strong></p>
                        <p><strong>{this.props.subject}</strong> {this.props.year} {this.props.session} сесія</p>
                        <button className={g.end}>Завершити</button>
                    </div>
                </div>
                <QuestionNavPanel
                    list={this.props.list}
                    callback={this.props.callback}
                    active={this.props.active}
                />
            </div>
        );
    }
}

export default Header;
