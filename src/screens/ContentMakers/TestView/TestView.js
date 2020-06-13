import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import ABCDE from "../../Templates/ABCDE/ABCDE";
import TestWrapper from "../../TestWrapper";
import axios from "axios";
import ABCD from "../../Templates/ABCD/ABCD";
import Logic_couples_4_4 from "../../Templates/Logic_Couples/Logic_couples_4_4";
import Logic_couples_4_5 from "../../Templates/Logic_Couples/Logic_couples_4_5";
import Double_Open from "../../Templates/Double_Open/Double_Open";
import Open from "../../Templates/Open/Open";
import Super_Open from "../../Templates/Super_Open/Super_Open";
import Services from "../../../Services"



export class TestView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            testId: this.props.match.params.id,
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
        console.log(this.state.data);
        console.log(this.state.list);
        //alert(this.state.active);
        if (this.state.data) {
            const data = this.state.data;
            let num = this.state.active - 1;
            if (data.getType() == "АБВГД") {
                return (
                        <div>
                            <ABCDE
                                callback={this.updateQuestion}
                                active={this.state.active}
                                number={this.state.n}
                                answered={this.state.answered[num]}
                                data={data}
                                changeStatus={this.updateStatus}
                            />
                            {document.getElementById("root").click()}
                            {document.getElementById("root").click()}
                        </div>
                )
            }
            if (data.getType() == "АБВГ") {
                return (
                        <div>
                            <ABCD
                                callback={this.updateQuestion}
                                active={this.state.active}
                                number={this.state.n}
                                answered={this.state.answered[num]}
                                data={data}
                                changeStatus={this.updateStatus}
                            />
                            {document.getElementById("root").click()}
                            {document.getElementById("root").click()}
                        </div>
                )
            }
            if (data.getType() == "Логічні пари 4/4") {
                return (
                        <div>
                            <Logic_couples_4_4
                                callback={this.updateQuestion}
                                active={this.state.active}
                                number={this.state.n}
                                answered={this.state.answered[num]}
                                data={data}
                                changeStatus={this.updateStatus}
                            />
                            {document.getElementById("root").click()}
                            {document.getElementById("root").click()}
                        </div>
                )
            }
            if (data.getType() == "Логічні пари 4/5") {
                return (
                        <div>
                            <Logic_couples_4_5
                                callback={this.updateQuestion}
                                active={this.state.active}
                                number={this.state.n}
                                answered={this.state.answered[num]}
                                data={data}
                                changeStatus={this.updateStatus}
                            />
                            {document.getElementById("root").click()}
                            {document.getElementById("root").click()}
                        </div>
                )
            }
            if (data.getType() == "Подвійне відкрите") {
                return (
                        <div>
                            <Double_Open
                                callback={this.updateQuestion}
                                active={this.state.active}
                                number={this.state.n}
                                answered={this.state.answered[num]}
                                data={data}
                                changeStatus={this.updateStatus}
                            />
                            {document.getElementById("root").click()}
                            {document.getElementById("root").click()}
                        </div>
                )
            }
            if (data.getType() == "Відкрите") {
                return (
                        <div>
                            <Open
                                callback={this.updateQuestion}
                                active={this.state.active}
                                number={this.state.n}
                                answered={this.state.answered[num]}
                                data={data}
                                changeStatus={this.updateStatus}
                            />
                            {document.getElementById("root").click()}
                            {document.getElementById("root").click()}
                        </div>
                )
            }
            if (data.getType() == "Розгорнуте") {
                return (
                        <div>
                            <Super_Open
                                callback={this.updateQuestion}
                                active={this.state.active}
                                number={this.state.n}
                                answered={this.state.answered[num]}
                                data={data}
                                changeStatus={this.updateStatus}
                            />
                            {document.getElementById("root").click()}
                            {document.getElementById("root").click()}
                        </div>
                )
            }

        }
        return (<div></div>);
    }
}

export default TestView;
