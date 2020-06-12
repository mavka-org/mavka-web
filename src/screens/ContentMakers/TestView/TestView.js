import React from 'react';
import {Redirect, Link} from 'react-router-dom';
import ABCDE from "../../Templates/ABCDE/ABCDE";
import TestWrapper from "../../TestWrapper";
import axios from "axios";
import ABCD from "../../Templates/ABCD/ABCD";
import Logic_couples_4_4 from "../../Templates/Logic_Couples/Logic_couples_4_4";

class Question {
    constructor(json){
        this.type = json["Формат"];
        this.year = json["Рік"];
        this.number = json["Номер"];
        this.session = json["Cecія"];
        this.subject = json["Предмет"];
        this.topic = json["Тема"];
        this.question = json["Питання"];
        this.answer = json["Правильна відповідь"];
        this.comment = json["Коментар"];
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
                this.setState({
                    data: new Question(result),
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
                this.getData("https://flask.mavka.org/api/get_question?page_id=" + result[1]);
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
                    <TestWrapper>
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
                    </TestWrapper>
                )
            }
            if (data.getType() == "АБВГ") {
                return (
                    <TestWrapper>
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
                    </TestWrapper>
                )
            }
            if (data.getType() == "Логічні пари 4/4") {
                return (
                    <TestWrapper>
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
                    </TestWrapper>
                )
            }

        }
        return (<div></div>);
    }
}

export default TestView;