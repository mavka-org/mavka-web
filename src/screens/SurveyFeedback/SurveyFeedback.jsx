import React from 'react';
import firebase from './../../global'
import { Link, Redirect } from 'react-router-dom';
import s from './Survey.module.css';
import g from './../Templates/Style.module.css';

class SurveyFeedback extends React.Component {
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

    render() {
        document.getElementsByTagName('body')[0].setAttribute("style", "overflow-y: scroll;")
        if(this.state.user == 25){
            return(<div></div>)
        }
        if(this.state.user){
            firebase.analytics().logEvent('start feedback survey')
            var url = "https://docs.google.com/forms/d/e/1FAIpQLSczD7jdjTArSGJbTM0TfecCkati2G94aSSLU_ybgE_a5JcFmQ/viewform?usp=pp_url&entry.1412116077=";
            url += this.state.user.email;
            return (
                <div style={{backgroundColor: '#f2f2f2'}}>
                    <center><button className={s.btn_turn_back} onClick={()=>{this.props.history.push({
                            pathname: this.props.location.state ? '/subject/' + this.props.location.state.subject : 'home',
                            state: { testID: this.props.location.state ? this.props.location.state.testID : ''}
                        });}}>Вийти з опитування</button></center>
                    <iframe src={url} width="100%" height={window.innerHeight} frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
            );
        }
        else {
            return(<Redirect to="/login"/>);
        }
    }
}

export default SurveyFeedback;
