import React from 'react';
import firebase from './../../global'
import s from './Courses.module.css';
import g from './../Templates/Style.module.css';
import Course from './Object/Course';
import Fire from './../Templates/Icon/Fire';
import Moai from './../Templates/Icon/Moai';
import Swords from './../Templates/Icon/Swords';
import Telescope from './../Templates/Icon/Telescope';
import DNA from './../Templates/Icon/DNA';
import Earth from './../Templates/Icon/Earth';
import German from './../Templates/Icon/German';
import France from './../Templates/Icon/France';
import UK from './../Templates/Icon/UK';
import Book from './../Templates/Icon/Book'
import { Redirect } from 'react-router-dom';
class Courses extends React.Component {
    state = {
        user: 25
    }

    componentDidMount = () => this.getAuthStatus();

    // Get firebase auth status.
    getAuthStatus = () => {
        firebase.auth().onAuthStateChanged((resp) => {

            // Pass response to a call back func to update state
            this.updateUserState(resp);
        });
    }

    // update state
    updateUserState = (resp) => {
        this.setState({
            user: resp
        })
    }

    navigate = (ref) => {
        this.props.history.push(ref);
    }

    render() {
        var pic1 = <Book />
        var pic2 = <Moai />
        var pic3 = <Swords />
        var pic4 = <DNA />
        var pic5 = <Earth />
        var pic6 = <UK />
        var pic7 = <France />
        var pic8 = <German />
        if (this.state.user == 25) {
            return (<div></div>)
        }
        if (this.state.user) {
            return (
                <div className={g.background}>
                    <div className={[s.page, g.page_].join(' ')}>

                        <div className={s.question_header}>
                            <div className={s.header}>
                                <div className={s.title}>Останній ривок до ЗНО <br></br>разом з мавкою <div><Fire /></div></div>
                                <div className={s.description}>Практикуйся, вчися на поясненнях та проходь симуляції екзамену. Обери предмет:</div>
                            </div>
                        </div>
                        <div className={s.courses_wrapper}>
                            <Course course={'Українська мова і література'} pic={pic1} navigate={this.navigate} />
                            <Course course={'Математика'} pic={pic2} navigate={this.navigate} />
                            <Course course={'Історія України'} pic={pic3} navigate={this.navigate} />
                            <Course course={'Біологія'} pic={pic4} navigate={this.navigate} />
                            <Course course={'Географія'} pic={pic5} style={{ opacity: 0.4, cursor: 'default' }} />
                            <Course course={'Англійська мова'} pic={pic6} style={{ opacity: 0.4, cursor: 'default' }} />
                            <Course course={'Французька мова'} pic={pic7} style={{ opacity: 0.4, cursor: 'default' }} />
                            <Course course={'Німецька мова'} pic={pic8} style={{ opacity: 0.4, cursor: 'default' }} />

                        </div>

                    </div>
                </div>
            );
        }
        else {
            return (<Redirect to="/login" />);
        }
    }
}

export default Courses;