import React from 'react';
import s from '../Header/Header.module.css';
import { Link } from "react-router-dom";

class HeaderMainMenu extends React.Component {
    render() {
        return (
            <div className={s.header}>
                <div className={s.nav_panel}>
                    <div className={s.nav}><strong>мавка</strong> зно</div>
                    <Link to={'/home'} style={{ color: 'black' }} onFocus={{ outline: 0, }}>
                        <div className={s.back}>
                            Назад до предметів
                        </div>
                    </Link>
                </div>
                <div style={{marginLeft:'25px',marginTop:'25px'}}>{this.props.children}</div>
            </div>
        );
    }
}

export default HeaderMainMenu;