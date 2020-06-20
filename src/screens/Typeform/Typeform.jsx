import React from 'react';
import firebase from './../../global'
import { Link, Redirect } from 'react-router-dom';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import s from './Survey.module.css';
import g from './../Templates/Style.module.css';
import axios from 'axios'

class SurveyDemographics extends React.Component {
    state = {
        user: 25
    }

    componentDidMount = () => this.getAuthStatus();

    // Get firebase auth status.
    getAuthStatus = () => {
        firebase.auth().onAuthStateChanged((resp) => {

            // Pass response to a call back func to update state
            this.updateUserState(resp);
        });
    }

    // update state
    updateUserState = (resp) => {
        this.setState({
            user: resp
        })
    }

    navigate = (ref) => {
        this.props.history.push(ref);
    }

    test () {
        //axios.get('https://api.typeform.com/forms/Xc7NMh/responses/').then((response) => {
        //    console.log(response.data)
        //})
        console.log("TEST")
    }

    render() {
        document.getElementsByTagName('body')[0].setAttribute("style", "overflow-y: scroll;")
        if(this.state.user == 25){
            return(<div></div>)
        }
        if(this.state.user){
            firebase.analytics().logEvent('start demographics survey')
            let url = 'https://api.typeform.com/forms/JpyKH0vn/responses';
            axios.get(url, {
                headers: {
                    'Access-Control-Allow-Origin': "*",
                    'Authorization': '6xXKW9jNFB6FLBYWaKJ6zJLndsYeXVSQEbfuPyxvjXY3'
                }
            }).then((res) => {
                console.log(res.data);
            });
            return(<div></div>)
        }
        else {
            return(<Redirect to="/login"/>);
        }
    }
}

export default SurveyDemographics;
