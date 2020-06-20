import React from 'react';
import s from './../../MainMenu.module.css';
import g from './../../../Templates/Style.module.css';
class Scores extends React.Component {
    render() {
        return (<div>
            <div className={s.scores_frame}>
                <div className={s.score_frame}>
                    <div className={s.score}>
                        <div className={s.mark}>{this.props.score200}</div>
                        <div className={s.comment}>ЗНО з 200</div>
                    </div>
                    <div className={s.score}>
                        <div className={s.mark}>{this.props.score12}</div>
                        <div className={s.comment}>ДПА з 12</div>
                    </div>
                    <div className={s.score}>
                        <div className={s.mark}>{this.props.numCorrect}</div>
                        <div className={s.comment}>Тестовий бал з 64</div>
                    </div>
                </div>
                <div className={s.btn_wrap} onClick={() => {
                    this.props.click();
                }}><button className={g.btn}>Переглянути помилки</button></div>
            </div>

        </div>

        );
    }
}

export default Scores;
