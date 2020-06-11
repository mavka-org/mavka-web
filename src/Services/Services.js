import axios from "axios";
import firebase from "../global"
import React from "react";
import Markdown from "markdown-to-jsx";

class Question {
    constructor(json){
        this.type = json["Формат"];
        this.year = json["Рік"];
        this.number = json["Номер"];
        this.session = json["Cecія"];
        this.subject = json["Предмет"];
        this.topic = json["Тема"];
        this.question = json["Питання"];
        this.answer = json["Правильна відповідь"];
        this.comment = json["Коментар"];
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
}

class Services {
    constructor() {}

    static async getData (ref){
        var storage = firebase.storage();
        var listRef = storage.refFromURL(ref);
        console.log(listRef)
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
        console.log(answer)
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
}
export default Services;
