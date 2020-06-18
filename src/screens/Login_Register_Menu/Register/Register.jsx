import React from 'react'
import s from './../Login_Register.module.css';
import g from '../../Templates/Style.module.css';
import firebase from "../../../global"
import { Redirect } from 'react-router-dom';

class Register extends React.Component {
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
    async register(email, password) {
        //alert(email + " " + password)
        firebase.analytics().logEvent('TEST user logged in');
        await firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            console.log(error);
        });

        if(firebase.auth().currentUser){
            firebase.analytics().logEvent('userLogin');
            this.props.history.push('/home')
        }
    }
    render() {
        if(this.state.user == 25){
            return(<div></div>)
        }
        if(this.state.user){
            return(<Redirect to="/home"/>)
        }
        return (
            <div className={g.background}>
                <div className={s.window}>
                    <div className={s.header}>
                        <strong>Реєстрація</strong>
                    </div>
                    <div className={s.btns}>
                        <button className={s.btn_google}>Увійти з Google</button>
                        <button className={s.btn}>Увійти з Facebook</button>

                        <div className={s.info}>
                            <div className={s.title}>EMAIL</div>
                            <div className={s.inp_wrapper}><div className={s.icon}></div><input id='email'></input></div>
                        </div>

                        <div className={s.info}>
                            <div className={s.title}>ПАРОЛЬ</div>
                            <div className={s.inp_wrapper}><div className={s.icon}></div><input id='password' type="password"></input></div>
                        </div>
                        <button className={s.btn} onClick={async()=>{
                            await this.register(document.getElementById('email').value, document.getElementById('password').value);
                        }}>Зареєструватися з Email</button>
                        <div className={s.account}>Вже маєш акаунт?</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;