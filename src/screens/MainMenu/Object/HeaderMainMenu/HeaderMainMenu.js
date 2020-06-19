import React from 'react';
import s from '../Header/Header.module.css';
import {Link} from "react-router-dom";

class HeaderMainMenu extends React.Component {
    render() {
        return (
            <div className={s.header}>
                <div className={s.nav_panel}>
                    <div className={s.nav}><strong>мавка</strong> зно</div>
                    {this.props.children}
                    <Link to={'/home'}>
                        <div>
                            Назад до предметів
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default HeaderMainMenu;