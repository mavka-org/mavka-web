import React from 'react';
import g from "../../../Templates/Style.module.css"
import s from './ZNO.module.css';

class ZNO extends React.Component {
    render() {
        return (
            <div className={s.zno_choose}>
                <div className={s.wrapper}>
                    <div className={s.description}>{this.props.testInfo.name}</div>
                    <div className={s.results}>
                        {this.props.testInfo.status}
                    </div>
                </div>
            </div>
        );
    }
}

export default ZNO;