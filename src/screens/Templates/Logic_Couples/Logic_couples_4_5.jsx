import React from 'react';
import { Component } from 'react';
import s from './Logic_couples_4_5.module.css';
import g from './../Style.module.css';
import Party from "../Icon/Party/Party";
import Question from '../Objects/Question/Question.jsx';
import CoupleAnswer from '../Objects/Answer/Couple_Answer';
import Answer from '../Objects/Answer/Answer.jsx';
import Topic from './../Objects/Topic/Topic.jsx';
import Header from './../Objects/Header/Header.jsx';
import Comment from './../Objects/Comment/Comment.jsx';
import Video from './../Objects/Video/Video.jsx';
import Next from './../Objects/Next/Next.jsx';
class Logic_Couples_4_5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: props.number,
            data: props.data,
            active: props.active,
            answered: props.answered
        }
        console.log(this.props.data);
    }

    componentDidUpdate(prevProps) {
        if (this.props != prevProps) {
            this.setState({
                number: this.props.number,
                data: this.props.data,
                active: this.props.active,
                answered: this.props.answered
            })
        }
    }

    render() {
        const data = this.state.data;
        let hidden = this.state.answered;
        console.log(this.state.number);
        console.log(this.props.callback);
        console.log(this.state.active);
        return (
            <div className={s.background}>
                <div className={[s.page, g.page_].join(' ')}>
                    <Header
                        subject={data.getSubject()}
                        year={data.getYear()}
                        session={data.getSession()}
                        list={this.state.number}
                        updateQuestion={this.props.updateQuestion}
                        active={this.state.active}
                    />
                    <div className={s.question_body}>
                        <div className={s.question_frame}>
                            <Question
                                question={data.getQuestion()}
                                active={this.state.active}
                                />
                            <Topic
                                topic={data.getTopic()}
                                hidden={hidden}
                                />
                            <Comment
                                comment={data.getComment()}
                                hidden={hidden}
                                />
                            <Video 
                                hidden={hidden}
                                />

                        </div>
                        <div className={s.answers_frame}>
                            <p className={s.choose}><strong>Обери одну відповідь</strong></p>
                            <div className={s.answers}>
                                <CoupleAnswer
                                    number={"1"}
                                    correctLetter={data.getMatchCorrectAnswers()[0]}
                                    subquestion={data.getMatchSubquestions()[0]}
                                    subanswer={data.getMatch4Options()[0]}
                                    explanation={data.getMatchExplanations()[0]}
                                    />
                                <CoupleAnswer
                                    number={"2"}
                                    correctLetter={data.getMatchCorrectAnswers()[1]}
                                    subquestion={data.getMatchSubquestions()[1]}
                                    subanswer={data.getMatch4Options()[1]}
                                    explanation={data.getMatchExplanations()[1]}
                                    />
                                <CoupleAnswer
                                    number={"3"}
                                    correctLetter={data.getMatchCorrectAnswers()[2]}
                                    subquestion={data.getMatchSubquestions()[2]}
                                    subanswer={data.getMatch4Options()[2]}
                                    explanation={data.getMatchExplanations()[2]}
                                    />
                                <CoupleAnswer
                                    number={"4"}
                                    correctLetter={data.getMatchCorrectAnswers()[3]}
                                    subquestion={data.getMatchSubquestions()[3]}
                                    subanswer={data.getMatch4Options()[3]}
                                    explanation={data.getMatchExplanations()[3]}
                                    />
                                <Answer
                                    letter={"Д"}
                                    question={data.getMatch4Options()[4]}
                                    explanation=""
                                    hidden={hidden}
                                    />
                            </div>
                            <div class={s.table}>
                                <table class={s.select_answer}>
                                    <tr>
                                        <th></th>
                                        <th>А</th>
                                        <th>Б</th>
                                        <th>В</th>
                                        <th>Г</th>
                                    </tr>
                                    <tr>
                                        <th class={s.r}>1</th>
                                        <td>
                                            <label>
                                                <input type="radio" value="1a" name="a[1]" class={s.q_radio}></input>
                                                <span class={s.marker}></span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" value="1b" name="a[1]" class={s.q_radio}></input>
                                                <span class={s.marker}></span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" value="1c" name="a[1]" class={s.q_radio}></input>
                                                <span class={s.marker}></span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" value="1d" name="a[1]" class={s.q_radio}></input>
                                                <span class={s.marker}></span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" value="1e" name="a[1]" class={s.q_radio}></input>
                                                <span class={s.marker}></span>
                                            </label>
                                        </td>

                                    </tr>
                                    <tr>
                                        <th class={s.r}>2</th>
                                        <td>
                                            <label>
                                                <input type="radio" value="2a" name="a[2]" class={s.q_radio}></input>
                                                <span class={s.marker}></span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" value="2b" name="a[2]" class={s.q_radio}></input>
                                                <span class={s.marker}></span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" value="2c" name="a[2]" class={s.q_radio}></input>
                                                <span class={s.marker}></span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" value="2d" name="a[2]" class={s.q_radio}></input>
                                                <span class={s.marker}></span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" value="2e" name="a[2]" class={s.q_radio}></input>
                                                <span class={s.marker}></span>
                                            </label>
                                        </td>

                                    </tr>
                                    <tr>
                                        <th class={s.r}>3</th>
                                        <td>
                                            <label>
                                                <input type="radio" value="3a" name="a[3]" class={s.q_radio}></input>
                                                <span class={s.marker}></span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" value="3b" name="a[3]" class={s.q_radio}></input>
                                                <span class={s.marker}></span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" value="3c" name="a[3]" class={s.q_radio}></input>
                                                <span class={s.marker}></span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" value="3d" name="a[3]" class={s.q_radio}></input>
                                                <span class={s.marker}></span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" value="3e" name="a[3]" class={s.q_radio}></input>
                                                <span class={s.marker}></span>
                                            </label>
                                        </td>

                                    </tr>
                                    <tr>
                                        <th class={s.r}>4</th>
                                        <td>
                                            <label>
                                                <input type="radio" value="4a" name="a[4]" class={s.q_radio}></input>
                                                <span class={s.marker}></span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" value="4b" name="a[4]" class={s.q_radio}></input>
                                                <span class={s.marker}></span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" value="4c" name="a[4]" class={s.q_radio}></input>
                                                <span class={s.marker}></span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" value="4d" name="a[4]" class={s.q_radio}></input>
                                                <span class={s.marker}></span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" value="4e" name="a[4]" class={s.q_radio}></input>
                                                <span class={s.marker}></span>
                                            </label>
                                        </td>

                                    </tr>
                                </table>
                                <Next 
                                    answered={this.state.answered}
                                    callback={this.props.changeStatus}
                                    number={this.state.active}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Logic_Couples_4_5;
