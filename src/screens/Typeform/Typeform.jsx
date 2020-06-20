import React from 'react';
import firebase from './../../global'
import { Link, Redirect } from 'react-router-dom';
import * as typeformEmbed from '@typeform/embed'
import s from './Survey.module.css';
import g from './../Templates/Style.module.css';


class SurveyDemographics extends React.Component {

    state = {
        user: 25
    }

    componentDidMount() {

        this.getAuthStatus();

        const popup1 = typeformEmbed.makePopup('https://laptiev.typeform.com/to/JpyKH0vn', {
            mode: 'popup',
            autoClose: 3000,
            hideHeaders: true,
            hideFooters: true,
            onSubmit: function() {
                    console.log('ONSUBMIT')
            }
        })

        popup1.open()

    }

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
            //firebase.analytics().logEvent('start demographics survey')
            return (
                <div style={{backgroundColor: '#f2f2f2'}}>
                    <center><Link to={'/home'}><button className={s.btn_turn_back}>Перейти на домашню сторінку</button></Link></center>
                </div>
            );
        }
        else {
            return(<Redirect to="/login"/>);
        }
    }
}

export default SurveyDemographics;
