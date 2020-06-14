import React from 'react';
import s from './MainMenu.module.css'
import g from '../Templates/Style.module.css';
import ZNO from './Object/ZNO/ZNO';
import Topic from "../Templates/Objects/Topic/Topic"
import Strong from "../Templates/Icon/Strong";
import VideoCamera from "../Templates/Icon/VideoCamera";
import { Link, Router, Redirect } from 'react-router-dom';
import SystemFunctions from "../../utils/SystemFunctions"
import axios from "axios";
import firebase from "../../global"
import ZNO_component from './Object/ZNO_component';
class MainMenu extends React.Component {

    constructor(props) {
        super(props);
        this.token = "";
        this.state = {
            subjectName: SystemFunctions.changeStringBeetwenHomeAndMain(this.props.match.params.id),
            subject: this.props.match.params.id,
            user: 25,
            tests: [],
            active: 0
        }
    }

    componentDidMount() {
        this.getAuthStatus();
    }

    // Get firebase auth status.
    getAuthStatus = () => {
        firebase.auth().onAuthStateChanged((resp) => {
            // Pass response to a call back func to update state
            this.updateUserState(resp);
        });
    }

    // update state
    updateUserState (resp) {
        this.setState({
            user: resp
        });

        let current = this;

        let token = resp.getIdToken().then(function (token) {
            current.token = token;
            //alert(token);
            const response = axios.post(
                'https://us-central1-mavka-c5c01.cloudfunctions.net/getTestsBySubject',
                {
                    token: token,
                    subject: current.state.subject
                },
                { headers: { 'Content-Type': 'text/plain' } }
            );

            response.then(function (value) {
                let tests = []
                let T = value.data;
                console.log("!!!!!!!!");
                console.log(T);
                for (let year in T) {
                    for (let t in T[year]) {
                        console.log(T[year][t].status);
                        tests.push({
                            name: T[year][t].type + " " + year,
                            status: T[year][t].status,
                            id: T[year][t].id,
                            ref: T[year][t].ref
                        })
                    }
                }
                current.setState({
                    tests: tests
                })
            });
        });
    }

    render() {
        if (this.state.user == 25) {
            return (<div></div>);
        }
        if(this.state.user){
            return (
                <div className={g.background}>
                    <div className={[s.page, g.page_].join(' ')} >
                        <div className={s.header}>
                            <div className={s.question_title}>
                                <strong>Тести з<br></br> {this.state.subjectName}</strong>
                            </div>
                            <div className={s.exit}>
                                <Link to={'/home'}>
                                    <button className={s.end}>
                                        Назад до предметів
                                    </button>
                                </Link>      
                            </div>
                        </div>
                        <div className={s.question_body}>
                            <div className={s.tests_body_left}>
                                <ZNO_component
                                    tests={this.state.tests} 
                                />
                            </div>

                            <div className={s.test_body_right}>
                                <div className={s.scores_frame}>
                                    <div className={s.title}>
                                        <strong>Бали ЗНО 2018 додаткова сесія</strong>
                                    </div>
                                    <div className={s.score_frame}>
                                        <div className={s.score}>
                                            <div className={s.mark}>200</div>
                                            <div className={s.comment}>ЗНО з 200</div>
                                        </div>
                                        <div className={s.score}>
                                            <div className={s.mark}>12</div>
                                            <div className={s.comment}>ДПА з 12</div>
                                        </div>
                                        <div className={s.score}>
                                            <div className={s.mark}>64</div>
                                            <div className={s.comment}>Тестовий бал з 64</div>
                                        </div>
                                    </div>
                                    <div className={s.btn_wrap}><button className={g.btn}>Переглянути помилки</button></div>
                                </div>
                                <div className={s.buttons_frame}>
                                    <div className={s.btn}>
                                        <div className={s.wrap}>
                                            <div className={s.btn_title}><strong>Практикуватися</strong></div>
                                            <div className={s.comment}>Проходь завдання та вчися на поясненнях</div>
                                        </div>
                                    </div>
                                    <div className={s.btn}>
                                        <div className={s.wrap}>
                                            <div className={s.btn_title}><strong>Симулювати ЗНО</strong></div>
                                            <div className={s.comment}>Перевір знання в умовах справжнього тестування</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={s.description}>Ти також можеш роздрукувати цей тест тут та автоматично перевірити розв’язання з нашим мобільним додатком (незабаром)</div>
                                <Topic 
                                    topic={["ЛОЛ"]}
                                />
                                <div className={s.video_explanation_frame}>
                                    <p><strong><VideoCamera /> Відеопояснення</strong></p>
                                    <div className={s.video}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return(<Redirect to="/login"/>);
    }
}

export default MainMenu;