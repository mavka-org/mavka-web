import React from 'react';
import g from './../../Style.module.css';
import Party from './../../Icon/Party/Party'
class Next extends React.Component {
    submitQuestion(){
        if(this.props.isPractice){
            if(this.props.answered) {
                this.props.updateQuestion(this.props.number + 1);
            }
            else {
                if(this.props.currentAnswer) {
                    this.props.updateAnswers(this.props.number, this.props.currentAnswer);
                }
                else {
                    console.log("выбери ответ");
                }
            }
        }else{
            if(this.props.currentAnswer) {
                this.props.updateAnswers(this.props.number, this.props.currentAnswer);
                this.props.updateQuestion(this.props.number + 1);
            }
            else {
                console.log("выбери ответ");
            }
        }  
    }
    render() {
        return (
            <div className={g.result_frame}>
                <div className={g.result}><strong><Party /> Правильно!</strong></div>
                <div className={g.stats}>80% учнів впоралися з цим завданням</div>
                <div className={g.wrap}>
                <button className={g.btn} onClick={() => {
                    this.submitQuestion();
                }}>{this.props.answered ? "Наступне питання" : "Перевірити"}</button>
                    <button class={g.pass}>Пропустити</button>
                </div>
            </div>
        );
    }
}

export default Next;