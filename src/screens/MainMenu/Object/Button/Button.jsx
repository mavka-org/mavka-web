import React from 'react';
import s from './../../MainMenu.module.css';
import g from './../../../Templates/Style.module.css';
class Button extends React.Component {
    render() {
        return (
            <div className={this.props.stl} onClick={() => {
                this.props.click();
            }}>
                <div className={[s.wrap, this.props.style].join(' ')}>
                    <div className={s.icon}>{this.props.icon}</div>
                    <div className={s.btn_title}><strong>{this.props.title}</strong></div>
                    <div className={s.comment}>{this.props.comment}</div>
                </div>
            </div>
            
        );
    }
}

export default Button;
