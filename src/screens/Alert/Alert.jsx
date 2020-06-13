import React from 'react';
import s from './Alert.module.css';

class Alert extends React.Component {
    render() {
        return (
            <div className={s.background}>
                <div className={s.alert}>
                    <div className={s.alert_text}><strong>Час ще не вийшов!</strong></div>
                    <div className={s.alert_description}>Ви впевенені, що бажаєте завершити симуляцію достроково?  </div>
                    <div className={s.btn_wrapper}>
                        <button className={s.btn_turn_back}>Повернутися до тесту</button>
                        <button className={s.btn_end}>Завершити та отримати бал</button>
                        <button className={s.btn_hard_end}>Завершити та скинути прогрес</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Alert;