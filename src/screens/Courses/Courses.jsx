import React from 'react';
import s from './Courses.module.css';
import g from './../../Templates/Style.module.css';
import Course from './Object/Course';
import Fire from './../../Templates/Icon/Fire/Fire';
import Moai from './../../Templates/Icon/Moai/Moai';
import Swords from './../../Templates/Icon/Swords/Swords';
import Telescope from './../../Templates/Icon/Telescope/Telescope';
import DNA from './../../Templates/Icon/DNA/DNA';
import Earth from './../../Templates/Icon/Earth/Earth';
import German from './../../Templates/Icon/German/German';
import France from './../../Templates/Icon/France/France';
import UK from './../../Templates/Icon/UK/UK';
import Book from './../../Templates/Icon/Book/Book';
class Courses extends React.Component {
    
    render() {
        var pic1 = <Book />
        var pic2 = <Moai />
        var pic3 = <Swords />
        var pic4 = <DNA />
        var pic5 = <Earth />
        var pic6 = <UK />
        var pic7 = <France />
        var pic8 = <German />
        return (
            <div className={g.background}>
                <div className={[s.page, g.page_].join(' ')}>
                    <div className={g.question_header}>
                        <div className={s.header}>
                            <div className={s.title}>Останній ривок до ЗНО <br></br>разом з мавкою <Fire /></div>
                            <div className={s.description}>Практикуйся, вчися на поясненнях та проходь симуляції екзамену. Обери предмет:</div>
                        </div>
                        
                        <div className={s.courses_wrapper}>
                            <Course course={'Українська мова і література'} pic={pic1} />
                            <Course course={'Математика'} pic={pic2} />
                            <Course course={'Історія України'} pic={pic3}/>
                            <Course course={'Біологія'} pic={pic4}/>
                            <Course course={'Географія'} pic={pic5} style={{opacity:0.4, cursor: 'default'}} />
                            <Course course={'Англійська мова'} pic={pic6} style={{opacity:0.4, cursor: 'default'}}/>
                            <Course course={'Французька мова'}pic={pic7} style={{opacity:0.4, cursor: 'default'}}/>
                            <Course course={'Німецька мова'}pic={pic8} style={{opacity:0.4, cursor: 'default'}}/>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Courses;