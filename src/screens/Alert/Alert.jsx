import React from 'react';
import s from './Alert.module.css';

class Alert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: this.props.time
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props != prevProps) {
            this.setState({
                time: this.props.time
            })
        }
    }

    render() {
        return (
            <div className={s.background} style={{
                zIndex: 100,
            }}>
                <div className={s.alert}>
                    <div className={s.alert_text}><strong>{this.state.time > 0 ? (<div>Час ще не вийшов!</div>) : (<div>Час вийшов!</div>)} </strong></div>
                    <div className={s.alert_description}>Ви впевенені, що бажаєте завершити симуляцію достроково?  </div>
                    <div className={s.btn_wrapper}>
                        {this.state.time > 0 ? (<button className={s.btn_turn_back} onClick={this.props.cancel}>Повернутися до тесту</button>) : null}
                        <button className={s.btn_end} onClick={() => {
                            this.props.updateQuestion(10000);
                        }}>Завершити та отримати бал</button>
                        <button className={s.btn_hard_end} onClick={() => {
                            this.props.goToMenu();
                        }}>Завершити та скинути прогрес</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Alert;