import React from 'react';
import firebase from "../../global"
import {Redirect, Link} from 'react-router-dom';
import axios from "axios";
import ListItem from "../../UI/ListItem";
import QuestionNavPanel from "../../UI/QuestionNavPanel";
import ABCDE from "../Templates/ABCDE/ABCDE";
import Services from "../../Services";
import TestWrapper from "../TestWrapper";

export class Test extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            subject: this.props.match.params.id,
            testId: this.props.match.params.testId,
            user: 25,
            questionCount: 36,
            active: 1,
            data: []
        }
        let current = this;
        Services.getReferenceById(this.state.testId).then(function (ref) {
            Services.getData(ref).then(function (data) {
                let myData = data.map(value => Services.getQuestionClass(value));
                current.setState({
                    data: myData
                });
                console.log("here");
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

    render() {
        if (this.state.user == 25) {
            return (<div></div>);
        }
        if (this.state.user) {
            if (this.state.data.length > 0) {
                const data = this.state.data;
                let num = this.state.active - 1;
                if (data[num].getType() == "АБВГД") {
                    return (
                        <TestWrapper>
                            <div>
                                <ABCDE
                                    callback={this.updateQuestion}
                                    active={this.state.active}
                                    number={this.state.data.length}
                                    data={data[num]}
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
        return(<Redirect to="/login"/>);
    }
}

export default Test;