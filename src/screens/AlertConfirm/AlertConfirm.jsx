import React from 'react';
import s from './AlertConfirm.module.css';

class AlertConfirm extends React.Component {
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
                    <div className={s.alert_description}>Ви впевенені, що бажаєте скинути прогрес для цього теста?  </div>
                    <div className={s.btn_wrapper}>
                        <button className={s.btn_end} onClick={() => {
                            this.props.deleteTestInfo(this.props.testID);
                            this.props.cancel();
                        }}>Так</button>
                        <button className={s.btn_turn_back} onClick={() => {
                            this.props.cancel();
                        }}>Ні</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AlertConfirm;