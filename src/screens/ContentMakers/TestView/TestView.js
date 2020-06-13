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

class Question {
    constructor(json){
        this.number = json["Номер"]
        this.type = json["Формат"];
        this.year = json["Рік"];
        this.number = json["Номер"];
        this.session = json["Cecія"];
        this.subject = json["Предмет"];
        this.topic = json["Тема"];
        this.question = json["Питання"];
        this.answer = json["Правильна відповідь"];
        this.comment = json["Коментар"];

        /* ARTEM'S CODE. PLEASE BEWARE IT'S SHITTY */
        this.match_subquestions = [json["Частинка 1"], json["Частинка 2"], json["Частинка 3"], json["Частинка 4"]];
        this.match_explanations = [json["Пояснення 1"], json["Пояснення 2"], json["Пояснення 3"], json["Пояснення 4"]];
        this.match_4letters = [json["Частинка A"], json["Частинка Б"], json["Частинка В"], json["Частинка Г"]];
        this.match_5letters = [json["Частинка A"], json["Частинка Б"], json["Частинка В"],
            json["Частинка Г"], json["Частинка Д"]];
        this.match_answers = [json["Правильна відповідь 1"], json["Правильна відповідь 2"],
            json["Правильна відповідь 3"], json["Правильна відповідь 4"]];
        this.double_open_subquestion = [json["Завдання 1"], json["Завдання 2"]];
        this.double_open_answers = [json["Відповідь 1"], json["Відповідь 2"]];
        this.double_open_explanations = [json["Пояснення 1"], json["Пояснення 2"]];
        this.open_answer = json["Відповідь"]
        /* END HERE */
        var tmpArr = ["Відповідь А", "Відповідь Б", "Відповідь В",
            "Відповідь Г", "Відповідь Д", "Відповідь Е", "Відповідь A",
            "Відповідь B", "Відповідь C", "Відповідь D", "Відповідь E",
            "Відповідь G", "Відповідь F", "Відповідь H"];
        var currArr = [];
        for(let i = 0; i < tmpArr.length; i++){
            if(json[tmpArr[i]] != null){
                currArr.push(json[tmpArr[i]]);
            }
            tmpArr[i] = tmpArr[i].replace("Відповідь", "Пояснення");
        }
        this.questions = currArr;
        currArr = [];
        for(let i = 0; i < tmpArr.length; i++){
            if(json[tmpArr[i]] != null){
                currArr.push(json[tmpArr[i]]);
            }
        }
        this.explanations = currArr;
    }
    get(){
        return this.explanations;
    }
    getNumber () {
        return this.number;
    }
    getType(){
        return this.type;
    }
    getYear(){
        return this.year;
    }
    getSubject(){
        return this.subject;
    }
    getTopic(){
        return this.topic;
    }
    getQuestion(){
        return this.question;
    }
    getAnswer(){
        return this.answer;
    }
    getComment(){
        return this.comment;
    }
    getQuestions() {
        // array of strings
        return this.questions;
    }
    getExplanations(){
        // array of strings
        return this.explanations;
    }
    getSession () {
        return this.session;
    }
    getMatchSubquestions () {
        return this.match_subquestions;
    }
    getMatchExplanations () {
        return this.match_explanations;
    }
    getMatch4Options () {
        return this.match_4letters;
    }
    getMatch5Options () {
        return this.match_5letters;
    }
    getMatchCorrectAnswers () {
        return this.match_answers;
    }
    getDoubleOpenSubquestion () {
        return this.double_open_subquestion;
    }
    getDoubleOpenAnswers () {
        return this.double_open_answers;
    }
    getDoubleOpenExplanations () {
        return this.double_open_explanations;
    }
    getOpenAnswer () {
        return this.open_answer; //THIS SHOULDN'T EXIST (change to normal getAnswer())
    }
}

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
                var question = new Question(result)
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
