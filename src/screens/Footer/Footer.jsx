import React from 'react';
import s from './Footer.module.css';

class Footer extends React.Component {
    render() {
        return (
            <div className={s.footer}>
                <div className={s.info}>
                    <div className={s.info_mavka}>
                        <div><strong>мавка</strong></div>
                        <div>описание</div>
                    </div>
                    <div className={s.info}>
                        <div className={s.info_mavka}>
                            <div><strong>Зв'язок</strong></div>
                            <div>мавка @Телеграм</div>
                            <div>hello@mavka.org</div>
                        </div>
                    </div>
                </div>
                <div className={s.names_frame}>
                    <div className={s.title}><strong>Люди за мавкою</strong></div>
                    <div className={s.names}>
                        <div classNam={s.names_object}>
                            <div className={s.name}>Имя Фамилия</div>
                            <div className={s.name}>Имя Фамилия</div>
                        </div>
                        <div classNam={s.names_object}>
                            <div className={s.name}>Имя Фамилия</div>
                            <div className={s.name}>Имя Фамилия</div>
                        </div>
                        <div classNam={s.names_object}>
                            <div className={s.name}>Имя Фамилия</div>
                            <div className={s.name}>Имя Фамилия</div>
                        </div>
                    </div>
                    <div className={s.names}>
                        <div classNam={s.names_object}>
                            <div className={s.name}>Имя Фамилия</div>
                            <div className={s.name}>Имя Фамилия</div>
                        </div>
                        <div classNam={s.names_object}>
                            <div className={s.name}>Имя Фамилия</div>
                            <div className={s.name}>Имя Фамилия</div>
                        </div>
                        <div classNam={s.names_object}>
                            <div className={s.name}>Имя Фамилия</div>
                            <div className={s.name}>Имя Фамилия</div>
                        </div>
                    </div>
                    <div className={s.names}>
                        <div classNam={s.names_object}>
                            <div className={s.name}>Имя Фамилия</div>
                            <div className={s.name}>Имя Фамилия</div>
                        </div>
                        <div classNam={s.names_object}>
                            <div className={s.name}>Имя Фамилия</div>
                            <div className={s.name}>Имя Фамилия</div>
                        </div>
                        <div classNam={s.names_object}>
                            <div className={s.name}>Имя Фамилия</div>
                            <div className={s.name}>Имя Фамилия</div>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

export default Footer;
