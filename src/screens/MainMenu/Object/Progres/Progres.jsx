import React from 'react';
import s from './../../MainMenu.module.css';
import g from './../../../Templates/Style.module.css';
class Progres extends React.Component {
    render() {
        return (
            <div className={s.skip}>
                <button className={g.btn}>Скинути прогрес</button>
                <div className={s.description} style={{ width: '130%', fontSize: '14px', lineHeight: '18px' }}>Ти втратиш прогрес, бали і рекомендовані теми, та зможеш практикувати та симулювати цей тест з нуля </div>
            </div>
        );
    }
}

export default Progres;
