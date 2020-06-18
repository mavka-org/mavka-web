import React from 'react'
import s from './../Login_Register.module.css';
import g from '../../../Templates/Style.module.css';

class Register extends React.Component {
    render() {
        return (
            <div className={g.background}>
                <div className={s.window}>
                    <div className={s.header}>
                        <strong>Реєстрація</strong>
                    </div>
                    <div className={s.btns}>
                        <button className={s.btn_google}>Увійти з Google</button>
                        <button className={s.btn}>Увійти з Facebook</button>
                        <div className={s.info}>
                            <div className={s.title}>EMAIL</div>
                            <div className={s.inp_wrapper}><div className={s.icon}></div><input></input></div>
                        </div>

                        <div className={s.info}>
                            <div className={s.title}>ПАРОЛЬ</div>
                            <div className={s.inp_wrapper}><div className={s.icon}></div><input></input></div>
                        </div>
                        <button className={s.btn}>Продовжити з Email</button>
                        <div className={s.account}>Вже є акаунт?</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;