import React from 'react';
import s from './MainMenu.module.css'
import g from '../Templates/Style.module.css';
import ZNO from './Object/ZNO/ZNO';
import Topic from "../Templates/Objects/Topic/Topic"
import strong from "../Templates/icons/strong.png";
import Clock from "../Templates/Icon/Clock";
import VideoCamera from "../Templates/Icon/VideoCamera";
import { Link, Router, Redirect } from 'react-router-dom';
import SystemFunctions from "../../utils/SystemFunctions"
import axios from "axios";
import firebase from "../../global"
import ZNO_component from './Object/ZNO_component';
import Services from '../../Services/Services';
import Confetti from '../../UI/Confetti/Confetti';
import Scores from './Object/Scores/Scores';
import Progres from './Object/Progres/Progres';
import Button from './Object/Button/Button';
import {animateScroll as scroll} from 'react-scroll'
import {bounce} from 'react-animations'
import Radium, {StyleRoot} from 'radium';
import NotFound from './../NotFound'

import Strong from '../Templates/Icon/Strong/Strong';
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
    updateUserState(resp) {
        this.setState({
            user: resp
        });

        let current = this;
        if (this.state.subject != 'Математика' && this.state.subject != 'Українська мова і література' && this.state.subject != 'Історія України' && this.state.subject != 'Біологія'){
            return (NotFound);
        }
        let token = resp.getIdToken().then(function (token) {
            current.token = token;
            //alert(token);
            const response = axios.post(
                'https://europe-west3-mavka-c5c01.cloudfunctions.net/getTestsBySubject',
                {
                    token: token,
                    subject: current.state.subject
                },
                { headers: { 'Content-Type': 'text/plain' } }
            );
            response.then(function (value) {
                let tests = []
                let T = value.data;
                console.log(value.data)
                for (let year in T) {
                    for (let t in T[year]) {
                        tests.push({
                            name1: "ЗНО " + year,
                            name2: T[year][t].type.toLowerCase() + " сесія",
                            status: T[year][t].status.toLowerCase(),
                            id: T[year][t].id,
                            ref: T[year][t].ref,
                            score200: T[year][t].score200,
                            score12: T[year][t].score12,
                            numCorrect: T[year][t].numCorrect
                        })
                    }
                }
                console.log(tests);
                //let myProps = Object.keys(current.props.location.state);
                console.log(current.props.location.state);
                current.setState({
                    tests: tests,
                    active: SystemFunctions.mainMenuActiveElement(typeof current.props.location.state != 'undefined' ? current.props.location.state.testID : 'undefined', tests)
                })
            });
        });
    }

    updateSelectedTest = (num) => {
        this.setState({
            active: num
        })
    }

    deleteTestInfo = (testID) => {
        this.scrollToTop();
        this.state.user.getIdToken().then((token) => {
            Services.deleteTestByID(token, testID).then(()=>{
                this.updateUserState(this.state.user);
            });
        });
        /*let tmp = this.state.tests;
        tmp[this.state.active].status = 'тест не пройдений';
        */
        
    }

    startPractice = () => {
        firebase.analytics().logEvent('openPractise');
        Services.changeTestStatusByID(this.token, this.state.tests[this.state.active].id, "вільна практика");
        this.props.history.push('/subject/' + this.state.subject + '/practice/' + this.state.tests[this.state.active].id);
    }

    openResults = () => {
        firebase.analytics().logEvent('openResults');
        this.props.history.push('/subject/' + this.state.subject + '/practice/' + this.state.tests[this.state.active].id);
    }

    startSimulation = () => {
        firebase.analytics().logEvent('openSimulation');
        this.props.history.push('/subject/' + this.state.subject + '/simulation/' + this.state.tests[this.state.active].id);
    }


    onClickPractice(){
        if(this.state.tests[this.state.active].status == 'тест пройдений'){
            return this.scrollToBottom; 
        }else return this.startPractice;
    }

    onClickSimulation() {
        if (this.state.tests[this.state.active].status == 'тест не пройдений') {
            return this.startSimulation;
        }else{
            return this.scrollToBottom; 
        } 
    }

    btnPracticeStyle() {
        if (this.state.tests[this.state.active].status == 'тест пройдений') {
            return s.btn_disabled;
        } else return s.btn;
    }

    btnSimulationStyle() {
        if (this.state.tests[this.state.active].status == 'тест не пройдений') {
            return s.btn;
        } else return s.btn_disabled;
    }

    scrollToBottom = () => {
        scroll.scrollToBottom();
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    }

    

    render() {
        let styles = {
            bounce: {
              animation: 'x 1s',
              animationName: Radium.keyframes(bounce, 'bounce')
            }
          }
        const pic1 = <Strong />
        const pic2 = <Clock />
        if (this.state.user == 25) {
            return (<div></div>);
        }
        if (this.state.subject != 'Математика' && this.state.subject != 'Українська мова і література' && this.state.subject != 'Історія України' && this.state.subject != 'Біологія'){
            return (NotFound);
        }
        if (this.state.user) {
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
                                    updateSelectedTest={this.updateSelectedTest}
                                    active={this.state.active}
                                />
                            </div>

                            {this.state.tests.length > 0 ? (<div className={s.test_body_right}>
                                <div>
                                    {this.state.tests[this.state.active].status == 'тест пройдений' && this.props.location.state ? (<Confetti />) : null}
                                </div>

                                <div className={s.scores_frame}>
                                    <div className={s.title}>
                                        <strong>{this.state.tests[this.state.active].name1 + " " + this.state.tests[this.state.active].name2}</strong>
                                    </div>
                                    {this.state.tests[this.state.active].status == 'тест пройдений' ? (<Scores numCorrect={this.state.tests[this.state.active].numCorrect} score12={this.state.tests[this.state.active].score12} score200={this.state.tests[this.state.active].score200} click={this.openResults}/>) : ""}
                                </div>
                                <div className={s.buttons_frame}>
                                    <Button stl={this.btnPracticeStyle()} click={this.onClickPractice()} icon={pic1} title={'Практикуватися'} comment={'Проходь завдання та вчися на поясненнях'} />
                                    <Button stl={this.btnSimulationStyle()} click={this.onClickSimulation()} icon={pic2} title={'Симулювати ЗНО'} comment={'Перевір знання в умовах тесту'} />
                                </div>
                                <div className={s.description}>Ти також можеш роздрукувати цей тест тут та автоматично перевірити розв’язання з нашим мобільним додатком (незабаром)</div>
                                <Topic
                                    topic={["ЛОЛ"]}
                                />
                                <div className={s.video_explanation_frame}>
                                    <p><strong><VideoCamera /> Відеопояснення</strong></p>
                                    <div className={s.video}>
                                        <div style={{ margin: '0 auto', color: 'white' }}>Незабаром...</div>
                                    </div>
                                </div>
                                {this.state.tests[this.state.active].status == 'тест не пройдений' ? "" : (<Progres testID={this.state.tests[this.state.active].id} click={this.deleteTestInfo}/>)}
                            </div>) : null}
                        </div>
                    </div>
                </div>
            )
        }
        return (<Redirect to="/register" />);
    }
}

export default MainMenu;
