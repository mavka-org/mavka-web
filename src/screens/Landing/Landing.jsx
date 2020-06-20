import React from 'react';
import s from './Landing.module.css';
import Strong from './../Templates/Icon/Strong'
import Clock from './../Templates/Icon/Clock'
import Light from './../Templates/Icon/Light'
import { Link } from 'react-router-dom';
class Landing extends React.Component {
    render() {
        return (
            <div className={s.page}>
                <div className={s.wrapper}>
                    <div className={s.frame_1}>
                        <div className={s.title}><strong>мавка </strong>&nbsp; зно<div className={s.beta}>бета</div></div>
                        <div className={s.big_title}>Готуйся до зно <br></br>по-новому </div>
                        <div className={s.desc}>Абсолютно безкоштовна платформа,<br></br> створена звичайними українцями <br></br> для українців, з любов’ю</div>
                        <Link to='/register'><div className={s.next}>Розпочати</div></Link>
                    </div>
                    <div className={s.frame_2}>
                        <div className={s.icon_row}><div className={s.icon}><Strong /></div><div className={s.desc_2}>Практикуйся на минулих тестах</div></div>
                        <div className={s.icon_row}><div className={s.icon}><Light /></div><div className={s.desc_2}>Вчися на покрокових поясненнях</div></div>
                        <div className={s.icon_row}><div className={s.icon}><Clock /></div><div className={s.desc_2}>Проходь симуляції та отримуй бали</div></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;
