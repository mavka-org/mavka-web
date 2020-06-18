import React from 'react';
import g from './../../../../Templates/Style.module.css';
import s from './Footer.module.css';

class Footer_Back extends React.Component {
    render() {
        return (
            <div className={g.footer}>
                <div className={s.logo}><strong>мавка </strong>зно</div>
                <div className={s.profile}>Назад</div>
            </div>
        );
    }
}

export default Footer_Back;