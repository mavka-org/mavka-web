import React from 'react';
import g from './../../Style.module.css';
import Party from './../../Icon/Party/Party';
import Strong from './../../Icon/StrongCopy/Strong';
import firebase from "../../../../global";
class Next extends React.Component {
    submitQuestion() {
        if(this.props.isPractice){
            if(this.props.answered) {
                this.props.scroll();
                this.props.updateQuestion(this.props.number + 1);
            }
            else {
                if(this.props.currentAnswer && this.props.isNextAllowed) {
                    this.props.updateAnswers(this.props.number, this.props.currentAnswer);
                }
                else {
                    console.log("выбери ответ");
                }
            }
        }else{
            if(this.props.currentAnswer) {
                firebase.analytics().logEvent('next');
                this.props.scroll();
                this.props.updateAnswers(this.props.number, this.props.currentAnswer);
                this.props.updateQuestion(this.props.number + 1);
            }
            else {
                console.log("выбери ответ");
            }
        }
    }

    getResult() {
        if(this.props.isPractice && this.props.answered) {
            if(this.props.scores[this.props.number - 1][1] == 2) {
                return (
                    <div>
                        <div className={g.result}><strong>Правильно!<Party /></strong></div>
                        <div className={g.stats}>Ти отримаєш {this.props.scores[this.props.number - 1][0]} балів із {this.props.scores[this.props.number - 1][2]} можливих</div>
                    </div>
                );
            }
            else if(this.props.scores[this.props.number - 1][1] == 1) {
                return (
                    <div>
                        <div className={g.result}><strong>Частково правильно<Strong /></strong></div>
                        <div className={g.stats}>Ти отримаєш {this.props.scores[this.props.number - 1][0]} балів із {this.props.scores[this.props.number - 1][2]} можливих</div>
                    </div>
                );
            }
            else {
                return (
                    <div>
                        <div className={g.result}><strong>Похибка, не здавайся!<Strong /></strong></div>
                        <div className={g.stats}>Ти отримаєш {this.props.scores[this.props.number - 1][0]} балів із {this.props.scores[this.props.number - 1][2]} можливих</div>
                    </div>
                );
            }
        }
        else {
            return <div></div>;
        }
    }

    render() {
        return (
            <div className={g.result_frame}>
                {this.getResult()}
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
