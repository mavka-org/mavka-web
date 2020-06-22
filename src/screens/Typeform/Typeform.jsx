import React from 'react';
import firebase from './../../global'
import { Link, Redirect } from 'react-router-dom';
import * as typeformEmbed from '@typeform/embed'
import s from './Survey.module.css';
import g from './../Templates/Style.module.css';
import axios from 'axios'
import Services from '../../Services/Services';

class Typeform extends React.Component {

    state = {
        user: 25
    }

    getAnswersFromData(data) {
        let items = data['items'][0]
        let answersDict = items['answers']

        let answers = []

        for (let x of answersDict) {
            answers.push(x['text'])
        }

        return answers
    }

    async demographicsOnSubmit() {
        let url = 'https://api.typeform.com/forms/JpyKH0vn/responses?page_size=1'

        // while loop until uid == user uid

        let data = await Services.getReqForm(url)
        let answers = this.getAnswersFromData(data)
        console.log(answers)

        // end

        //
    }

    componentDidMount() {

        this.getAuthStatus();

        let demographicsOnSubmit = () => {
            this.demographicsOnSubmit();
            Services.setDemographicsSurvey(this.state.user, 'false').then(()=>{
                this.navigate('/home');
            })
        }

        const demographicsForm = typeformEmbed.makePopup('https://laptiev.typeform.com/to/JpyKH0vn?uid=12345', {
            mode: 'popup',
            hideHeaders: true,
            hideFooters: true,
            onSubmit: demographicsOnSubmit,
            onClose: function() {
                demographicsForm.open()
            }
        })

        demographicsForm.open()

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

    render() {
        document.getElementsByTagName('body')[0].setAttribute("style", "overflow-y: hidden;")
        if(this.state.user == 25){
            return(<div></div>)
        }
        if(this.state.user){
            //firebase.analytics().logEvent('start demographics survey')
            return (
                <div>
                </div>
            );
        }
        else {
            return(<Redirect to="/login"/>);
        }
    }
}

export default Typeform;
