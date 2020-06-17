import React from 'react';
import firebase from "../../global"
import {Redirect, Link} from 'react-router-dom';
import ListItem from "../../UI/ListItem";
import ABCDE from "../Templates/ABCDE/ABCDE";
import Services from "../../Services";
import ABCD from '../Templates/ABCD/ABCD';
import Logic_Couples_4_4 from '../Templates/Logic_Couples/Logic_Couples_4_4';
import Logic_Couples_4_5 from '../Templates/Logic_Couples/Logic_Couples_4_5';
import Double_Open from '../Templates/Double_Open/Double_Open';
import Open from '../Templates/Open/Open';
import Open_Ended from '../Templates/Super_Ended/Open_Ended';
import SystemFunctions from '../../utils/SystemFunctions';
import ABCDE_OneColumn from "../Templates/ABCDE_OneColumn/ABCDE_OneColumn";
import ABCD_OneColumn from "../Templates/ABCD_OneColumn/ABCD_OneColumn";
import Double_Open_OneColumn from "../Templates/Double_Open_OneColumn/Double_Open_OneColumn";
import Logic_Couples_4_4_OneColumn from "../Templates/Logic_Couples_OneColumn/Logic_Couples_4_4_OneColumn";
import Logic_Couples_4_5_OneColumn from "../Templates/Logic_Couples_OneColumn/Logic_Couples_4_5_OneColumn";
import g from "../Templates/Style.module.css";
import s from "../Templates/ABCDE/ABCDE.module.css";
import Header from "../Templates/Objects/Header/Header";
import BioTriples from '../Templates/BioTriples/BioTriples';
import Geo_History_3_7 from '../Templates/Geo_History_3_7/Geo_History_3_7';

const componentsMap = {
    ABCDE,
    ABCD,
    Logic_Couples_4_4,
    Logic_Couples_4_5,
    Double_Open,
    Open,
    Open_Ended,
    ABCDE_OneColumn,
    ABCD_OneColumn,
    Double_Open_OneColumn,
    Logic_Couples_4_4_OneColumn,
    Logic_Couples_4_5_OneColumn,
    'Bio_Triples': BioTriples,
    'Bio_Triples_OneColumn': BioTriples,
    Geo_History_3_7,
    'Geo_History_3_7_OneColumn': Geo_History_3_7,
};

export class Test extends React.Component{


    updateScreen () {
        this.setState({
            width: window.innerWidth
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            subject: this.props.match.params.id,
            testId: this.props.match.params.testId,
            isPractice: SystemFunctions.stringsEqual(this.props.match.params.mode, 'practice'),
            user: 25,
            active: 1,
            data: [],
            answered: [],
            n: 0,
            answers: {},
            checkedAnswers: {},
            width: window.innerWidth,
        }
        this.updateScreen = this.updateScreen.bind(this);
        window.addEventListener("resize", this.updateScreen);

        let current = this;
        Services.getReferenceById(this.state.testId).then(function (ref) {
            Services.getData(ref).then(function (data) {
                console.log(data);
                let myData = data.map(value => Services.getQuestionClass(value));
                let status = [];
                for (let i = 0; i < myData.length; i++) status.push(false);
                myData.sort((a, b) => a.getNumber() - b.getNumber());
                console.log("!!!!!!!!!!!!!");
                console.log(myData);
                current.setState({
                    data: myData,
                    answered: status,
                    n: myData.length
                });
                current.state.user.getIdToken().then((token)=>{
                    Services.getTestAnswers(token, current.state.testId).then(function (response){
                        console.log("Test.js");
                        console.log(response.data);
                        let checkedAnswers = {};
                        if(response.data != "not exist"){
                            for(let tmp in response.data){
                                if(tmp != "status")
                                    checkedAnswers[tmp] = current.state.data[Number(tmp) - 1].checkCorrect(response.data[tmp]);
                            }
                            current.setState({
                                answers: response.data,
                                checkedAnswers: checkedAnswers
                            })
                        }
                    })
                })
                console.log("Data");
                console.log(myData);
            })
        })


    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        document.getElementById("FAKE").click();
        document.getElementById("FAKE1").click();
    }

    componentDidMount() {
        this.getAuthStatus();
        document.getElementById("FAKE").click();
        document.getElementById("FAKE1").click();
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
    }

    updateQuestion = (x) => {
        if(x <= this.state.n){
            this.setState({
                active: x
            });
        }else{

            if(this.state.isPractice){
                console.log("ПОСЛЕДНИЙ ВОПРОС")
                this.props.history.push({
                    pathname: '/subject/' + this.state.subject,
                    state: { testID: this.state.testId }
                  });
            }else{
                this.state.user.getIdToken().then((token) => {
                    this.setState({
                        user: 25
                    })
                    Services.updateTestAnswers(token, this.state.testId, this.state.answers).then(() => {
                        Services.changeTestStatusByID(token, this.state.testId, "Тест пройдений").then(() => {
                                this.props.history.push({
                                    pathname: '/subject/' + this.state.subject,
                                    state: { testID: this.state.testId }
                                });
                            }
                        );
                    })
                });

                /*
                setTimeout(() => {  this.props.history.push({
                    pathname: '/subject/' + this.state.subject,
                    state: { testID: this.state.testId }
                  });
                }, 1000);
                */
            }
        }
    }

    updateStatus = (id, x) => {
        const answered = this.state.answered;
        answered[id - 1] = x;
        this.setState({
            answered: answered
        })
    }

    updateAnswers = (num, answer) => {
        firebase.analytics().logEvent('check');
        const answers = this.state.answers;
        const checkedAnswers = this.state.checkedAnswers;
        answers[num] = answer;
        checkedAnswers[num] = this.state.data[Number(num) - 1].checkCorrect(answer);
        this.setState({
            answers: answers,
            checkedAnswers: checkedAnswers
        })
        if(this.state.isPractice) {
            this.state.user.getIdToken().then((token) => {
                let obj = {};
                obj[num] = answer;
                Services.updateTestAnswers(token, this.state.testId, obj);
            })
        }
    }

    render() {
       // console.log("Test.js");
       // console.log(this.state.checkedAnswers);
        if (this.state.user == 25) {
            return (<div></div>);
        }
        if (this.state.user) {
            if (this.state.data.length > 0) {
                const data = this.state.data;
                let num = this.state.active - 1;
                let type = data[num].getType();
                if (window.innerWidth <= 992 || !data[num].getIsDoubleColumn()) {
                    type += "_OneColumn";
                }
                const DynamicComponent = componentsMap[type];

                if (this.state.active in this.state.answers) {
                    firebase.analytics().logEvent('oldQuestion');
                }
                else {
                    firebase.analytics().logEvent('newQuestion');
                }

                return (
                    <div className={g.background}>
                        <div className={[s.page, g.page_].join(' ')}>
                            <Header
                                checkedAnswers={this.state.checkedAnswers}
                                subject={data[num].getSubject()}
                                year={data[num].getYear()}
                                session={data[num].getSession()}
                                list={this.state.n}
                                updateQuestion={this.updateQuestion}
                                active={this.state.active}
                            />
                            <DynamicComponent
                                updateQuestion={this.updateQuestion}
                                active={this.state.active}
                                number={this.state.n}
                                answered={(this.state.active in this.state.answers)}
                                data={data[num]}
                                changeStatus={this.updateStatus}
                                updateAnswers={this.updateAnswers}
                                currentAnswer={this.state.answers[this.state.active]}
                                isPractice={this.state.isPractice}
                            >
                            </DynamicComponent>
                        </div>
                    </div>
                )
            }
            return (<div></div>);
        }
        return(<Redirect to="/login"/>);
    }
}

export default Test;
