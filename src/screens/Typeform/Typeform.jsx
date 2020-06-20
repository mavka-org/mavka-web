import React from 'react';
import firebase from './../../global'
import { Link, Redirect } from 'react-router-dom';
import { ReactTypeformEmbed } from 'react-typeform-embed';
import s from './Survey.module.css';
import g from './../Templates/Style.module.css';


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
        console.log("TEST")
    }

    render() {
        document.getElementsByTagName('body')[0].setAttribute("style", "overflow-y: scroll;")
        if(this.state.user == 25){
            return(<div></div>)
        }
        if(this.state.user){
            firebase.analytics().logEvent('start demographics survey')
            var url = "https://docs.google.com/forms/d/e/1FAIpQLScgZErcirQmzkPQFxLZG8OiQ-NriSpRdl4KVib99Q8dcXJ5nA/viewform?usp=pp_url&entry.1198759471=";
            url += this.state.user.email;
            return (
                <div style={{backgroundColor: '#f2f2f2'}}>
                    <center><Link to={'/home'}><button className={s.btn_turn_back}>Перейти на домашню сторінку</button></Link></center>
                    <ReactTypeformEmbed
                        url='https://developerplatform.typeform.com/to/Xc7NMh'
                        onSubmit={this.test()}
                        />
                </div>
            );
        }
        else {
            return(<Redirect to="/login"/>);
        }
    }
}

export default SurveyDemographics;
