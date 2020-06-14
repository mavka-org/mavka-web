import React from 'react';
import firebase from "../../global"
import {Redirect, Link} from 'react-router-dom';
import ListItem from "../../UI/ListItem";
import ABCDE from "../Templates/ABCDE/ABCDE";
import Services from "../../Services";
import ABCD from '../Templates/ABCD/ABCD';
import Logic_Couples_4_4 from '../Templates/Logic_Couples/Logic_couples_4_4';
import Logic_Couples_4_5 from '../Templates/Logic_Couples/Logic_couples_4_5';
import DoubleOpen from '../Templates/Double_Open/Double_Open';
import Open from '../Templates/Open/Open';
import Super_Open from '../Templates/Super_Open/Super_Open';


export class Test extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            subject: this.props.match.params.id,
            testId: this.props.match.params.testId,
            user: 25,
            active: 1,
            data: [],
            answered: [],
            n: 0,
            answers: {},
            checkedAnswers: {}
        }
        let current = this;
        Services.getReferenceById(this.state.testId).then(function (ref) {
            Services.getData(ref).then(function (data) {
                let myData = data.map(value => Services.getQuestionClass(value));
                let status = [];
                for (let i = 0; i < myData.length; i++) status.push(false);
                current.setState({
                    data: myData,
                    answered: status,
                    n: myData.length
                });
                current.state.user.getIdToken().then((token)=>{
                    Services.getTestAnswers(token, current.state.testId).then(function (response){
                        let checkedAnswers = {};
                        for(let tmp in response.data){
                            checkedAnswers[tmp] = current.state.data[Number(tmp) - 1].checkCorrect(response.data[tmp]);
                        }
                        current.setState({
                            answers: response.data,
                            checkedAnswers: checkedAnswers
                        })
                    })
                })
                console.log("Data");
                console.log(myData);
            })
        })
        

    }
    


    componentDidMount() {
        this.getAuthStatus();
    }

    // Get firebase auth status.
    getAuthStatus = () => {
        firebase.auth().onAuthStateChanged((resp) => {
            // Pass response to a call back func to update state
            this.updateUserState(resp);
        });
    }

    // update state
    updateUserState (resp) {
        this.setState({
            user: resp
        });
    }

    updateQuestion = (x) => {
        this.setState({
            active: x
        });
    }

    updateStatus = (id, x) => {
        const answered = this.state.answered;
        answered[id - 1] = x;
        this.setState({
            answered: answered
        })
    }

    updateAnswers = (num, answer) => {
        const answers = this.state.answers;
        const checkedAnswers = this.state.checkedAnswers;
        answers[num] = answer;
        checkedAnswers[num] = this.state.data[Number(num) - 1].checkCorrect(answer);
        this.state.user.getIdToken().then((token) => {
            let obj ={};
            obj[num] = answer;
            Services.updateTestAnswers(token, this.state.testId, obj);
        })
        this.setState({
            answers: answers,
            checkedAnswers: checkedAnswers
        })
    }

    render() {
        console.log("Test.js");
        console.log(this.state.checkedAnswers);
        if (this.state.user == 25) {
            return (<div></div>);
        }
        if (this.state.user) {
            if (this.state.data.length > 0) {
                const data = this.state.data;
                let num = this.state.active - 1;
                if (data[num].getType() == "АБВГД") {
                    return (
                            <div>
                                <ABCDE
                                    checkedAnswers={this.state.checkedAnswers}
                                    updateQuestion={this.updateQuestion}
                                    active={this.state.active}
                                    number={this.state.n}
                                    answered={(this.state.active in this.state.answers)}
                                    data={data[num]}
                                    changeStatus={this.updateStatus}
                                    updateAnswers={this.updateAnswers}
                                    currentAnswer={null}
                                />
                                {document.getElementById("root").click()}
                                {document.getElementById("root").click()}
                            </div>
                    )
                }
                if (data[num].getType() == "АБВГ") {
                    return (
                            <div>
                                <ABCD
                                    callback={this.updateQuestion}
                                    active={this.state.active}
                                    number={this.state.n}
                                    answered={this.state.answered[num]}
                                    data={data[num]}
                                    changeStatus={this.updateStatus}
                                />
                                {document.getElementById("root").click()}
                                {document.getElementById("root").click()}
                            </div>
                    )
                }
                if (data[num].getType() == "Логічні пари 4/4") {
                    console.log("Логічні пари 4/4");
                    return (
                            <div>
                                <Logic_Couples_4_4
                                    checkedAnswers={this.state.checkedAnswers}
                                    updateQuestion={this.updateQuestion}
                                    active={this.state.active}
                                    number={this.state.n}
                                    answered={(this.state.active in this.state.answers)}
                                    data={data[num]}
                                    changeStatus={this.updateStatus}
                                    updateAnswers={this.updateAnswers}
                                    currentAnswer={null}
                                />
                                {document.getElementById("root").click()}
                                {document.getElementById("root").click()}
                            </div>
                    )
                }
                if (data[num].getType() == "Логічні пари 4/5") {
                    console.log("Логічні пари 4/5");
                    return (
                            <div>
                                <Logic_Couples_4_5
                                    checkedAnswers={this.state.checkedAnswers}
                                    updateQuestion={this.updateQuestion}
                                    active={this.state.active}
                                    number={this.state.n}
                                    answered={(this.state.active in this.state.answers)}
                                    data={data[num]}
                                    changeStatus={this.updateStatus}
                                    updateAnswers={this.updateAnswers}
                                    currentAnswer={null}
                                />
                                {document.getElementById("root").click()}
                                {document.getElementById("root").click()}
                            </div>
                    )
                }
                if (data[num].getType() == "Подвійне відкрите") {
                    return (
                            <div>
                                <DoubleOpen
                                    callback={this.updateQuestion}
                                    active={this.state.active}
                                    number={this.state.n}
                                    answered={this.state.answered[num]}
                                    data={data[num]}
                                    changeStatus={this.updateStatus}
                                />
                                {document.getElementById("root").click()}
                                {document.getElementById("root").click()}
                            </div>
                    )
                }
                if (data[num].getType() == "Відкрите") {
                    return (
                            <div>
                                <Open
                                    callback={this.updateQuestion}
                                    active={this.state.active}
                                    number={this.state.n}
                                    answered={this.state.answered[num]}
                                    data={data[num]}
                                    changeStatus={this.updateStatus}
                                />
                                {document.getElementById("root").click()}
                                {document.getElementById("root").click()}
                            </div>
                    )
                }
                if (data[num].getType() == "Розгорнуте") {
                    return (
                            <div>
                                <Super_Open
                                    callback={this.updateQuestion}
                                    active={this.state.active}
                                    number={this.state.n}
                                    answered={this.state.answered[num]}
                                    data={data[num]}
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
        return(<Redirect to="/login"/>);
    }
}

export default Test;