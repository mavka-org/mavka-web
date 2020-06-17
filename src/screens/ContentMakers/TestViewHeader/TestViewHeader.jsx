import React from 'react';
import g from './../../Style.module.css';
import Strong from './../../Icon/Strong/Strong';
import QuestionNavPanel from "../../../../UI/QuestionNavPanel";
import { Link } from 'react-router-dom';
class TestViewHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: props.active,
            checkedAnswers: props.checkedAnswers,
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props != prevProps) {
            this.setState({
                active: this.props.active,
                checkedAnswers: this.props.checkedAnswers,
            })
        }
    }

    render() {
        console.log(this.state.checkedAnswers);
        return (
            <div>
                <div>
                    <QuestionNavPanel
                        checkedAnswers={this.state.checkedAnswers}
                        list={this.props.list}
                        updateQuestion={this.props.updateQuestion}
                        active={this.props.active}
                    />
                    <div className={g.question_header}>
                        <div className={g.title_bar}>
                            <p><strong>{this.props.subject}</strong> {this.props.year} {this.props.session} сесія</p>
                        </div>
                        <button className={g.end}>Змінити вигляд питання</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default TestViewHeader;