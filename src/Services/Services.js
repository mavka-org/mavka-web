import axios from "axios";
import firebase from "../global"
import React from "react";
import Markdown from "markdown-to-jsx";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

class Question {
    constructor(json){
        this.number = json["Номер"];
        this.type = json["Format"];
        this.year = json["Рік"];
        this.number = json["Номер"];
        this.session = json["Сесія"];
        this.subject = json["Предмет"];
        this.topic = json["Тема"];
        this.question = json["Питання"];
        this.answer = json["Правильна відповідь"];
        this.comment = json["Коментар"];
        this.isDoubleColumn = json["Розгорнутий вигляд"];

        /* ARTEM'S CODE. PLEASE BEWARE IT'S SHITTY */
        this.match_subquestions = [json["Частинка 1"], json["Частинка 2"], json["Частинка 3"], json["Частинка 4"]];
        this.match_explanations = [json["Пояснення 1"], json["Пояснення 2"], json["Пояснення 3"], json["Пояснення 4"]];
        this.match_4letters = [json["Частинка А"], json["Частинка Б"], json["Частинка В"], json["Частинка Г"]];
        this.match_5letters = [json["Частинка А"], json["Частинка Б"], json["Частинка В"],
            json["Частинка Г"], json["Частинка Д"]];
        this.match_answers = [json["Правильна відповідь 1"], json["Правильна відповідь 2"],
            json["Правильна відповідь 3"], json["Правильна відповідь 4"]];
        this.double_open_subquestion = [json["Завдання 1"], json["Завдання 2"]];
        this.double_open_answers = [json["Відповідь 1"], json["Відповідь 2"]];
        this.double_open_explanations = [json["Пояснення 1"], json["Пояснення 2"]];
        this.open_answer = json["Відповідь"]
        /* END HERE */
        var tmpArr = ["Відповідь А", "Відповідь Б", "Відповідь В",
            "Відповідь Г", "Відповідь Д", "Відповідь Е", "Відповідь A",
            "Відповідь B", "Відповідь C", "Відповідь D", "Відповідь E",
            "Відповідь G", "Відповідь F", "Відповідь H"];
        var currArr = [];
        for(let i = 0; i < tmpArr.length; i++){
            if(json[tmpArr[i]] != null){
                currArr.push(json[tmpArr[i]]);
            }
            tmpArr[i] = tmpArr[i].replace("Відповідь", "Пояснення");
        }
        this.questions = currArr;
        currArr = [];
        for(let i = 0; i < tmpArr.length; i++){
            if(json[tmpArr[i]] != null){
                currArr.push(json[tmpArr[i]]);
            }
        }
        this.explanations = currArr;
    }
    get(){
        return this.explanations;
    }
    getNumber () {
        return this.number;
    }
    getType(){
        return this.type;
    }
    getYear(){
        return this.year;
    }
    getSubject(){
        return this.subject;
    }
    getTopic(){
        return this.topic;
    }
    getQuestion(){
        return this.question;
    }
    getAnswer(){
        return this.answer;
    }
    getComment(){
        return this.comment;
    }
    getQuestions() {
        // array of strings
        return this.questions;
    }
    getExplanations(){
        // array of strings
        return this.explanations;
    }
    getSession () {
        return this.session;
    }
    getMatchSubquestions () {
        return this.match_subquestions;
    }
    getMatchExplanations () {
        return this.match_explanations;
    }
    getMatch4Options () {
        return this.match_4letters;
    }
    getMatch5Options () {
        return this.match_5letters;
    }
    getMatchCorrectAnswers () {
        return this.match_answers;
    }
    getDoubleOpenSubquestion () {
        return this.double_open_subquestion;
    }
    getDoubleOpenAnswers () {
        return this.double_open_answers;
    }
    getDoubleOpenExplanations () {
        return this.double_open_explanations;
    }
    getOpenAnswer () {
        return this.open_answer; //THIS SHOULDN'T EXIST (change to normal getAnswer())
    }
    getIsDoubleColumn() {
        return this.isDoubleColumn;
    }
    checkCorrect (answerToCheck) {
        if(this.getType() == "ABCDE"){
            return answerToCheck == this.answer;
        }
    }
}

class Services {
    constructor() {}

    static async getData (ref){
        var storage = firebase.storage();
        var listRef = storage.refFromURL(ref);
        const list1 = await listRef.listAll().then(function(res) {
            var list = [];
            res.items.forEach(function(itemRef) {
                list.push(itemRef.getDownloadURL())
            });
            return list
        })
            .catch(function(error) {
                console.log(error)
            });
        const results1 = await Promise.all(list1);
        var list2 = [];
        results1.forEach(url => {
            list2.push(axios.post(
                'https://us-central1-mavka-c5c01.cloudfunctions.net/getReq',
                {
                    url: url
                },
                { headers: { 'Content-Type': 'text/plain' } }
            ))
        })
        const results2 = await Promise.all(list2);
        let answer = [];
        results2.forEach(resp => {
            answer.push(resp.data)
        });
        return answer
    }

    static async getReferenceById (id) {
        const firestore = firebase.firestore();
        return await firestore.collection("practices_id").doc(id).get().then(doc => {
            return doc.get("ref");
        });
    }
    static getQuestionClass (json) {
        return new Question(json);
    }
    static async updateTestAnswers(token, testID, answers){
        const response = await axios.post(
            'https://us-central1-mavka-c5c01.cloudfunctions.net/updCourseAnswers',
            { 
                token: token,
                courseID: testID,
                answers: answers
            },
            { headers: { 'Content-Type': 'text/plain' } }
        )
    }
    static async getTestAnswers(token, testID){
        const response = await axios.post(
            'https://us-central1-mavka-c5c01.cloudfunctions.net/getTestAnswers',
            { 
                token: token,
                courseID: testID
            },
            { headers: { 'Content-Type': 'text/plain' } }
        )
        return response;
    }

    static async changeTestStatusByID(token, testID, status){
        const response = await axios.post(
            'https://us-central1-mavka-c5c01.cloudfunctions.net/changeStatusById',
            { 
                token: token,
                id: testID,
                status: status
            },
            { headers: { 'Content-Type': 'text/plain' } }
        )
    }
}
export default Services;
