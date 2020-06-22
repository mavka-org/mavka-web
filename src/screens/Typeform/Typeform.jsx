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
        let answers = items['answers']

        return answers
    }

    getHiddenFromData(data) {
        let items = data['items'][0]
        let hidden = items['hidden']

        return hidden
    }

    async demographicsOnSubmit() {
        let url = 'https://api.typeform.com/forms/BnKWPReN/responses?page_size=1'
        let uid = this.state.user.uid

        let data = {
    "total_items": 19,
    "page_count": 19,
    "items": [{
        "landing_id": "p5jkmvw87t9hk42cp5jkmfp39gn4k84f",
        "token": "p5jkmvw87t9hk42cp5jkmfp39gn4k84f",
        "response_id": "p5jkmvw87t9hk42cp5jkmfp39gn4k84f",
        "landed_at": "2020-06-21T23:22:08Z",
        "submitted_at": "2020-06-21T23:22:59Z",
        "metadata": {
            "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Safari/537.36",
            "platform": "other",
            "referer": "https://mavkaorg.typeform.com/to/BnKWPReN?uid=NbdnWkZz8ObgNTUq5tAUTFt2uFw1\u0026typeform-embed=popup-blank\u0026embed-hide-headers=true\u0026typeform-embed-id=sgyce",
            "network_id": "4536b4232f",
            "browser": "default"
        },
        "hidden": {
            "uid": "NbdnWkZz8ObgNTUq5tAUTFt2uFw1"
        },
        "calculated": {
            "score": 0
        },
        "answers": [{
            "field": {
                "id": "vRNxd75yEds4",
                "ref": "5148a34d-8479-4b7b-9c50-b8ba26f7b334",
                "type": "multiple_choice"
            },
            "type": "choice",
            "choice": {
                "id": "other",
                "other": "хер собачий"
            }
        }, {
            "field": {
                "id": "kqZhHWkDemAh",
                "ref": "e16ec352-9f22-4208-9fab-2363caf0e6d2",
                "type": "multiple_choice"
            },
            "type": "choices",
            "choices": {
                "ids": ["9Pt2UYrKMvBT", "3f8jVs07pexq", "bsFAhhjzVV79", "other"],
                "labels": ["Пости у соц. мережах", "Друзі не з команди мавки", "Вчителі"],
                "other": "хахах"
            }
        }, {
            "field": {
                "id": "m9yk9XtjCN96",
                "ref": "84b8b64c-9670-4c2c-9928-d42c54302eaa",
                "type": "yes_no"
            },
            "type": "boolean",
            "boolean": true
        }, {
            "field": {
                "id": "OMBFtX9tHEcp",
                "ref": "9961b4a8-f785-4df9-8624-239e0c778ac0",
                "type": "multiple_choice"
            },
            "type": "choice",
            "choice": {
                "id": "other",
                "other": "нывки"
            }
        }, {
            "field": {
                "id": "UAcQzHq7DIM3",
                "ref": "851ef09f-1290-4e98-a729-f55117b0995a",
                "type": "multiple_choice"
            },
            "type": "choice",
            "choice": {
                "id": "a1DzXVKMuvsl",
                "label": "10-12"
            }
        }]
    }]
}

        /*
        ERROR:
        Access to XMLHttpRequest at 'https://europe-west3-mavka-c5c01.cloudfunctions.net/getReqForm' from
        origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header
        is present on the requested resource.


        let data = await Services.getReqForm(url)
        let requested_uid = this.getHiddenFromData(data)['uid']

        // wait until you get the valid user's response
        while (requested_uid != uid) {
            data = await Services.getReqForm(url)
            requested_uid = this.getHiddenFromData(data)['uid']
        }
        */

        let answers = this.getAnswersFromData(data)

        this.initiateUserProperties(answers)
    }


    initiateUserProperties (answers) {

        // entryProduct --> мавка зно чи мавка?
        firebase.analytics().setUserProperties({entryProduct: 'mavka zno'});

        // occupationType --> Що тебе описує?
        let occupationTypeDict = {
                "UI8Oz6L9C2wr" : "11thgrader",
        		"wYemcfOvwoqj" : "10thgrader",
        		"URsZrQJZmmuF" : "educator",
        		"other" : answers[0]['choice']['other']
        }
        let occupationType = occupationTypeDict[answers[0]['choice']['id']]
        firebase.analytics().setUserProperties({occupationType: occupationType});
        console.log(occupationType)

        if (occupationType != 'educator') {

            // statedAqSource --> Звідки ти знаєш про Мавку?, може бути кілька відповідей
            let statedAqSourceDict = {
              "Qn7ipi5N1Mi1" : "instaAds",
              "9Pt2UYrKMvBT" : "socialMedia",
              "PoNu7KrOcbZ1" : "mavkaStaff",
              "3f8jVs07pexq" : "friends",
              "bsFAhhjzVV79" : "teachers",
              "other" : answers[1]['choices']['other']
            }
            let statedAqSource = ""
            for (let source of answers[1]['choices']['ids']) {
            	statedAqSource = statedAqSource + statedAqSourceDict[source] + " "
            }
            console.log(statedAqSource)
            firebase.analytics().setUserProperties({statedAqSource: statedAqSource});


            // hadTutor --> Ти готуєшся до ЗНО хоча б з одним репетитором?, boolean
            let hadZNOTutor = answers[2]['boolean']
            console.log(hadZNOTutor)
            firebase.analytics().setUserProperties({hadZNOTutor: hadZNOTutor});


            // schoolLocation --> Де ти навчаєшся?
            let schoolLocationDict = {
              "TPvZyomgZKYA" : "stateCity",
              "mMBLseQiBZY5" : "city",
              "BMxp3gpIBU0V" : "village",
              "other" : answers[3]['choice']['other']
            }
            let schoolLocation = schoolLocationDict[answers[3]['choice']['id']]
            console.log(schoolLocation)
            firebase.analytics().setUserProperties({schoolLocation: schoolLocation});


            // schoolPerformance --> Які оцінки ти зазвичай отримуєш?
            let schoolPerformance = answers[4]['choice']['label']
            console.log(schoolPerformance)
            firebase.analytics().setUserProperties({schoolPerformance: schoolPerformance});

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
    updateUserState = (resp) => {
        this.setState({
            user: resp
        })
    }

    navigate = (ref) => {
        this.props.history.push(ref);
    }

    render() {
        let uid = this.state.user.uid

        let demographicsOnSubmit = () => {
            this.demographicsOnSubmit();
        }

        if (uid) {
            const demographicsForm = typeformEmbed.makePopup('https://mavkaorg.typeform.com/to/BnKWPReN?uid=' + uid, {
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
