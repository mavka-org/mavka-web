import React from 'react';
import g from './../../Style.module.css';
import Strong from './../../Icon/Strong/Strong';
class Header extends React.Component {
    render() {
        return (
            <div className={g.question_header}>
                <div className={g.title_bar}>
                    <div><strong><Strong /> Практика</strong></div>
                    <div><strong>українська мова та література </strong> 2018 додаткова сесія</div>
                    <button className={g.end}>Завершити</button>
                </div>
            </div>
        );
    }
}

export default Header;