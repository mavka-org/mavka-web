import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import ABCDE from "../../Templates/ABCDE/ABCDE";
import ABCDE_OneColumn from "../../Templates/ABCDE_OneColumn/ABCDE_OneColumn";
import axios from "axios";
import ABCD from "../../Templates/ABCD/ABCD";
import ABCD_OneColumn from "../../Templates/ABCD_OneColumn/ABCD_OneColumn";
import Logic_Couples_4_5 from "../../Templates/Logic_Couples/Logic_Couples_4_5";
import Logic_Couples_4_5_OneColumn from "../../Templates/Logic_Couples_OneColumn/Logic_Couples_4_5_OneColumn";
import Logic_Couples_4_4 from "../../Templates/Logic_Couples/Logic_Couples_4_4";
import Logic_Couples_4_4_OneColumn from "../../Templates/Logic_Couples_OneColumn/Logic_Couples_4_4_OneColumn";
import Double_Open from "../../Templates/Double_Open/Double_Open";
import Double_Open_OneColumn from "../../Templates/Double_Open_OneColumn/Double_Open_OneColumn";
import Open from "../../Templates/Open/Open";
import Open_Ended from "../../Templates/Super_Ended/Open_Ended";
import Services from "../../../Services"
import g from "../../Templates/Style.module.css";
import s from "../../Templates/ABCDE/ABCDE.module.css";
import Header from "../../Templates/Objects/Header/Header";

const componentsMap = {
    ABCDE,
    ABCD,
    Logic_Couples_4_4,
    Logic_Couples_4_5,
    Double_Open,
    Open,
    Open_Ended,
    ABCDE_OneColumn,
    ABCD_OneColumn,
    Double_Open_OneColumn,
    Logic_Couples_4_4_OneColumn,
    Logic_Couples_4_5_OneColumn,
};

export class TestView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            testId: null,
            active: 1,
            data: null,
            n: 0,
            list: [],
        }
    }

    getData (url) {
        fetch(url)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                var question = Services.getQuestionClass(result)
                this.setState({
                    data: question,
                    active: question.getNumber()
                })
            })
            .catch(e => console.log(e));
    }

    componentDidMount() {
        let id = 'https://flask.mavka.org/api/get_test_map?page_id=' + this.state.testId;
        fetch(id)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                let ans = [];
                let cnt = 0;
                for (let x in result) {
                    ++cnt;
                    ans.push(false);
                }
                this.setState({
                    list: result,
                    n: cnt,
                    answered: ans
                })
                this.getData("https://flask.mavka.org/api/get_question?page_id=" + this.state.testId);
            })
            .catch(e => console.log(e));

    }

    updateQuestion = (x) => {
        this.setState({
            active: x,
            data: null
        });
        this.getData("https://flask.mavka.org/api/get_question?page_id=" + this.state.list[x]);
    }

    updateStatus = (id, x) => {
        const answered = this.state.answered;
        answered[id - 1] = x;
        this.setState({
            answered: answered
        })
    }

    render() {
        if (this.state.data.length > 0) {
            const data = this.state.data;
            let num = this.state.active - 1;
            let type = data[num].getType();

            if (window.innerWidth <= 992 || !data[num].getIsDoubleColumn()) {
                type += "_OneColumn";
            }
            const DynamicComponent = componentsMap[type];
            //alert(type);
            return (
                <div className={g.background}>
                    <div className={[s.page, g.page_].join(' ')}>
                        <Header
                            checkedAnswers={this.state.checkedAnswers}
                            subject={data[num].getSubject()}
                            year={data[num].getYear()}
                            session={data[num].getSession()}
                            list={this.state.n}
                            updateQuestion={this.updateQuestion}
                            active={this.state.active}
                        />
                        <DynamicComponent
                            checkedAnswers={this.state.checkedAnswers}
                            updateQuestion={this.updateQuestion}
                            active={this.state.active}
                            number={this.state.n}
                            answered={(this.state.active in this.state.answers)}
                            data={data[num]}
                            changeStatus={this.updateStatus}
                            updateAnswers={this.updateAnswers}
                            currentAnswer={this.state.currentAnswer}
                            isPractice={this.state.isPractice}
                            updateCurrentAnswer={this.updateCurrentAnswer}
                        >
                        </DynamicComponent>
                    </div>
                </div>
            )
        }
        return (<div></div>);
    }
}

export default TestView;
