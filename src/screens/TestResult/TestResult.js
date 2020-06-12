import s from "../Templates/ABCDE/ABCDE.module.css";
import Party from "../Templates/Icon/Party";
import React, {Component} from "react";

class TestResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answered: props.answered
        }
    }
    render() {
        let finished = (
            <div>
                <div className={s.result}><strong>Правильно!</strong><Party/></div>
                <p className={s.stats}>80% учнів впоралися з цим завданням</p>
            </div>
        )
        return (
            <div className={s.result_frame}>
                {this.state.answered ? finished : null}
                <button className={s.btn} onClick={() => {
                    this.props.callback(this.props.number, true)
                }}>{this.state.answered ? "Наступне питання" : "Перевірити"}</button>
            </div>
        );
    }
}
export default TestResult;
