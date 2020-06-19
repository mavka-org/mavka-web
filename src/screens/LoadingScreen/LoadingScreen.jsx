import React from 'react';
import s from './LoadingScreen.module.css';
import Strong from './../../Templates/Icon/Book/Book'

class LoadingScreen extends React.Component {
    render() {
        return (
            <div className={s.page}>
                <div className={s.loading}>
                    <div><strong>мавка </strong>зно</div>
                   <div style={{marginTop: '50px'}}><Strong /></div>
                </div>
            </div>
        )
    }
}
export default LoadingScreen;