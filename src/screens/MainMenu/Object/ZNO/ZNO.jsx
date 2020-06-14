import React from 'react';
import g from "../../../Templates/Style.module.css"
import s from './ZNO.module.css';

class ZNO extends React.Component {
    render() {
        return (
            <div className={s.zno_choose}>
                <div className={s.wrapper}>
                    <div className={s.description}><div><strong>ЗНО 2019 </strong></div> додаткова сесія</div>
                    <div className={s.results}>
                        <div>200 ЗНО </div>
                        <div> 12 ДПА</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ZNO;