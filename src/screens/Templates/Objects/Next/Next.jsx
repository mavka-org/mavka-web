import React from 'react';
import g from './../../Style.module.css';
import Party from './../../Icon/Party/Party'
class Next extends React.Component {
    render() {
        return (
            <div className={g.result_frame}>
                <div className={g.result}><strong><Party /> Правильно!</strong></div>
                <div className={g.stats}>80% учнів впоралися з цим завданням</div>
                <div className={g.wrap}>
                    <button class={g.btn}>Наступне питання</button>
                    <button class={g.pass}>Пропустити</button>
                </div>
            </div>
        );
    }
}

export default Next;