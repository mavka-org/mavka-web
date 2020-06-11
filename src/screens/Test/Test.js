import React from 'react';
import firebase from "../../global"
import {Redirect, Link} from 'react-router-dom';
import axios from "axios";
import ListItem from "../../UI/ListItem";
import QuestionNavPanel from "../../UI/QuestionNavPanel";
import ABCDE from "../Templates/ABCDE/ABCDE";


export class Test extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            subject: this.props.match.params.id,
            testId: this.props.match.params.testId,
            user: 25,
            questionCount: 36,
            active: 1
        }
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
            return (
                <div>
                    <ABCDE
                    callback={this.updateQuestion}
                    active={this.state.active}
                    number={36}
                    />
                </div>
            )
        }
        return(<Redirect to="/login"/>);
    }
}

export default Test;