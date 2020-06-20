import React from 'react';
import s from '../Header/Header.module.css';
import { Link } from "react-router-dom";

class HeaderMainMenu extends React.Component {
    render() {
        return (
            <div className={s.header}>
                <div className={s.nav_panel}>
                    <div className={s.nav}><strong>мавка</strong> зно</div>
                        <div className={s.back} onClick={()=>{
                                this.props.navigate('/home')
                            }}>
                            {this.props.selectedMainMenu ? ('Назад до тестів') : ('Назад до предметів')}
                        </div>
                </div>
                <div style={{marginLeft:'25px',marginTop:'25px', width: '95%'}}>{this.props.children}</div>
            </div>
        );
    }
}

export default HeaderMainMenu;