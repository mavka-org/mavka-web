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

    componentDidMount() {

        this.getAuthStatus();

        const demographicsForm = typeformEmbed.makePopup('https://laptiev.typeform.com/to/JpyKH0vn', {
            mode: 'popup',
            hideHeaders: true,
            hideFooters: true,
            onSubmit: function() {
                    console.log('ONSUBMIT')
            },
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

<<<<<<< HEAD
=======
    test () {
        //axios.get('https://api.typeform.com/forms/Xc7NMh/responses/').then((response) => {
        //    console.log(response.data)
        //})
        console.log("TEST")
    }

>>>>>>> master
    render() {
        document.getElementsByTagName('body')[0].setAttribute("style", "overflow-y: hidden;")
        if(this.state.user == 25){
            return(<div></div>)
        }
        if(this.state.user){
<<<<<<< HEAD
            //firebase.analytics().logEvent('start demographics survey')
            return (
                <div>
                </div>
            );
=======
            firebase.analytics().logEvent('start demographics survey')
            let url = 'https://api.typeform.com/forms/JpyKH0vn/responses?page_size=1'
            Services.getReqForm(url);
            return(<div></div>)
>>>>>>> master
        }
        else {
            return(<Redirect to="/login"/>);
        }
    }
}

export default Typeform;
