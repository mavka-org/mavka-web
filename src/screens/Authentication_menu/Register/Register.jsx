import React from 'react'
import style from '../styles/Register.module.css'
import {Link} from 'react-router-dom'
import axios from 'axios'

var firebase = require("firebase/app");
require("firebase/auth");
var firebaseConfig = {
    apiKey: "AIzaSyCpJw3Fn2f1zwE74t0vmKAZG6MnR_3ZQfc",
    authDomain: "mavka-c5c01.firebaseapp.com",
    databaseURL: "https://mavka-c5c01.firebaseio.com",
    projectId: "mavka-c5c01",
    storageBucket: "mavka-c5c01.appspot.com",
    messagingSenderId: "477171666648",
    appId: "1:477171666648:web:3f3932e925ad180d2f11ad",
    measurementId: "G-GDHG2W55Q5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export class Register extends React.Component{
    
    
    constructor(props){
        super(props)
    }

    reg(email, password) {
        alert(email + " " + password)
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorCode + " " + errorMessage);
            return;
        });
        const response = await axios.post(
            'https://us-central1-mavka-c5c01.cloudfunctions.net/createUserInDb',
            { token: ttt},
            { headers: { 'Content-Type': 'text/plain' } }
        )
    }
    checkUser() {
        if(firebase.auth().currentUser != null)
            alert(firebase.auth().currentUser.uid)
        else 
            alert('gav')
    }

    logOut() {
        firebase.auth().signOut().then(function() {
        }).catch(function(error) {
        });
    }

    async getData(){
        var ttt = ""
        if(firebase.auth().currentUser) {
            ttt = await firebase.auth().currentUser.getIdToken()
        }
        alert(ttt)
        alert(JSON.stringify({ token: ttt }))
        const response = await axios.post(
            'https://us-central1-mavka-c5c01.cloudfunctions.net/getTestsBySubject',
            { token: ttt, subject: "Математика" },
            { headers: { 'Content-Type': 'text/plain' } }
        )
        alert(response.data)
    }

    render(){
        return(
            <div className={style.base_container}>
                <p>mavka</p>
                <p>Зареєструватися</p>
                <div className={style.inputs}>
                    <div className={style.name}>
                        <p>Ім'я</p>
                        <input id="sa" placeholder="Ім'я"></input>
                        <p>Прізвище</p>
                        <input placeholder='Прізвище'></input>
                    </div>
                    <p>Електронна пошта</p>
                    <input placeholder='Email' id="email"></input>
                    <p>Пароль</p>
                    <input id="pass" type="password" placeholder='Пароль'></input>
                </div>
                <div className={style.btn_log_in}><button className={style.log_in} onClick={() => this.reg(document.getElementById("email").value, document.getElementById("pass").value)}>Вхід</button></div>
                <div className={style.btn_log_in}><button className={style.log_in} onClick={() => this.checkUser()}>checkUser</button></div>
                <div className={style.btn_log_in}><button className={style.log_in} onClick={() => this.logOut()}>logOut</button></div>
                <div className={style.btn_log_in}><button className={style.log_in} onClick={async() => await this.getData()}>send</button></div>
                <div className={style.social}>
                    <a href="#" class={style.facebook}>Facebook</a>
                    <a href="#" class={style.google}>Google</a>
                </div>
            </div>
        )
    }
}