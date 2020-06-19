import React from 'react'
import s from './../Login_Register.module.css';
import g from '../../Templates/Style.module.css';
import firebase from "../../../global"
import { Redirect, Link } from 'react-router-dom';

class Login extends React.Component {
    state = {
        user: 25,
        emailComment: '',
        passwordComment: '',
        changedEmail: true,
        changedPassword: true
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
    async login(email, password) {
        //alert(email + " " + password)
        firebase.analytics().logEvent('TEST user logged in');
        let current = this;
        await firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            console.log(error);
            if(error.code == "auth/wrong-password"){
                current.setState({
                    passwordComment: "Неправильний пароль!",
                    emailComment: "",
                    changedPassword: false,
                    changedEmail: true
                })
            }
            if(error.code == "auth/invalid-email"){
                current.setState({
                    emailComment: "Неправильний формат електронної пошти!",
                    passwordComment: "",
                    changedPassword: true,
                    changedEmail: false
                })
            }
            if(error.code == "auth/user-not-found"){
                current.setState({
                    emailComment: "Не існує користувача з даною електронною поштою!",
                    passwordComment: "",
                    changedPassword: true,
                    changedEmail: false
                })
            }     
        });

        if(firebase.auth().currentUser){
            firebase.analytics().logEvent('userLogin');
            this.props.history.push('/home')
        }
    }

    trueChangedEmail(){
        this.setState({
            changedEmail: true
        })
    }

    trueChangedPassword(){
        this.setState({
            changedPassword: true
        })
    }

    render() {
        if(this.state.user == 25){
            return(<div></div>)
        }
        if(this.state.user){
            return(<Redirect to="/home"/>)
        }
        let current = this;
        return (
            <div className={g.background}>
                <div className={s.window}>
                    <div className={s.header}>
                        <strong>Вхід</strong>
                    </div>
                    <div className={s.btns}>
                        <button className={s.btn_google}>Увійти з Google</button>
                        <button className={s.btn}>Увійти з Facebook</button>
                        <div className={s.info}>
                            <div className={s.title}>EMAIL</div>
                            <div className={s.inp_wrapper}><div className={s.icon}></div><input onChange={()=>{
                                this.trueChangedEmail();
                            }} id='email' style={{
                                border: (this.state.emailComment && !this.state.changedEmail) ? "1px red solid" : ""
                            }}></input></div>
                        </div>
                        <div style={{color:'red'}}>
                            {this.state.emailComment}
                        </div>
                        <div className={s.info}>
                            <div className={s.title}>ПАРОЛЬ</div>
                            <div className={s.inp_wrapper}><div className={s.icon}></div><input onChange={()=>{
                                this.trueChangedPassword();
                            }} id='password' type="password" style={{
                                border: (this.state.passwordComment && !this.state.changedPassword) ? "1px red solid" : ""
                            }}></input></div>
                        </div>
                        <div style={{color:'red'}}>
                            {this.state.passwordComment}
                        </div>
                        <button className={s.btn} onClick={async()=>{
                            await this.login(document.getElementById('email').value, document.getElementById('password').value);
                        }}>Увійти з Email</button>
                        <Link to='/register'>
                            <div className={s.account}>Зареєструватися</div>
                        </Link>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;