import React from 'react';
import firebase from "../../global"
import {Redirect, Link} from 'react-router-dom';
import axios from "axios";
import ListItem from "../../UI/ListItem";


export class Subject extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            subject: this.props.match.params.id,
            user: 25,
            tests: []
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

        let current = this;

        let token = resp.getIdToken().then(function (token) {
            //alert(token);
            const response = axios.post(
                'https://us-central1-mavka-c5c01.cloudfunctions.net/getTestsBySubject',
                {
                    token: token,
                    subject: current.state.subject
                },
                { headers: { 'Content-Type': 'text/plain' } }
            );

            response.then(function (value) {
                let tests = []
                let T = value.data;
                for (let year in T) {
                    for (let t in T[year]) {
                        tests.push({
                            name: T[year][t].type + " " + year,
                            status: T[year][t].status,
                            id: T[year][t].id,
                            ref: T[year][t].ref
                        })
                    }
                }
                current.setState({
                    tests: tests
                })
            });
        });
    }

    render() {
        if (this.state.user == 25) {
            return (<div></div>);
        }
        if (this.state.user) {
            const test = this.state.tests;
            let code = test.map((info) => (
                <Link to={"/subject/" + this.state.subject + "/test/" + info.id}>
                    <ListItem
                        text={info.name}
                        pushed={null}/>
                </Link>
            ))
            return (
                <div>
                    {this.state.subject}
                    {code}
                </div>
            )
        }
        return(<Redirect to="/login"/>);
    }
}

export default Subject;