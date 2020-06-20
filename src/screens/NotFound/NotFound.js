import React from 'react';
<<<<<<< HEAD
import s from './NotFound.module.css'
const NotFound = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.image}>
                <div className={s.alert}>Опаньки, такої сторінки не знайдено!</div>
                <img src='https://i.pinimg.com/originals/e6/7f/67/e67f678b67683359e5cc4f08e2ff4577.gif' style={{width:'100%',height:'100%'}} ></img>
            </div>
        </div>
    )
=======
import s from './NotFound.module.css';
class NotFound extends React.Component {
    render() {
        console.log(1);
        return ( 
            <div></div>
        );
    }
>>>>>>> master
}
export default NotFound;