import React from 'react';
import g from "../../../Templates/Style.module.css"
import s from './ZNO.module.css';

class ZNO extends React.Component {
    render() {
        return (
            <div className={s.zno_choose + (this.props.num == this.props.active ? " " + s.active : "")} onClick={() => {this.props.updateSelectedTest(this.props.num)}}>
                <div className={s.wrapper}>
                    <div className={s.description}><b>{this.props.testInfo.name1}</b> &nbsp; {this.props.testInfo.name2}</div>
                    <div className={s.results}>
                        {this.props.testInfo.status}
                    </div>
                </div>
            </div>
        );
    }
}

export default ZNO;