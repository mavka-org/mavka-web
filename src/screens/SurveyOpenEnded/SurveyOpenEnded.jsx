import React from 'react';
import firebase from './../../global'
import { Link, Redirect } from 'react-router-dom';
import s from './Survey.module.css';
import g from './../Templates/Style.module.css';

class SurveyOpenEnded extends React.Component {
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
        document.getElementsByTagName('body')[0].setAttribute("style", "overflow-y: hidden;")

        if(this.state.user == 25){
            return(<div></div>)
        }
        if(this.state.user){
            var url = "https://docs.google.com/forms/d/e/1FAIpQLSdksE7_7G53XpqGyMrcYVEft-gj8x9KmwgKSyTnr9P87f0NsQ/viewform?usp=pp_url&entry.1391972551=";
            url += this.state.user.email;
            return (
                <div style={{backgroundColor: '#f2f2f2'}}>
                    <center><Link to={'/home'}><button className={s.btn_turn_back}>Вийти з опитування</button></Link></center>
                    <iframe src={url} width="100%" height={window.innerHeight} frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
            );
        }
        else {
            return(<Redirect to="/login"/>);
        }
    }
}

export default SurveyOpenEnded;
