import React from 'react';
import { Component } from 'react';
import s from './Logic_couples_4_5.module.css';
import g from './../Style.module.css';
import Party from "../Icon/Party/Party";
import Question from '../Objects/Question/Question.jsx';
import CoupleAnswer from '../Objects/Answer/Couple_Answer';
import CoupleOption from '../Objects/Answer/CoupleOption';
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
            checkedAnswers: props.checkedAnswers,
            number: props.number,
            data: props.data,
            active: props.active,
            answered: props.answered,
            currentAnswer: props.currentAnswer
        }
        console.log(this.props.data);
    }

    componentDidUpdate(prevProps) {
        if (this.props != prevProps) {
            console.log('sos' + this.props.answered)
            this.setState({
                checkedAnswers: this.props.checkedAnswers,
                number: this.props.number,
                data: this.props.data,
                active: this.props.active,
                answered: this.props.answered,
                currentAnswer: this.props.currentAnswer
            })
        }
    }

    buildQA() {
        console.log('aaa')
        const data = this.state.data;
        let single1 = [];
        for(let i = 0; i < 4; ++i) {
            single1.push(<CoupleAnswer
                number={(i + 1).toString()}
                correctLetter={data.getMatchCorrectAnswers()[i]}
                subquestion={data.getMatchSubquestions()[i]}
                subanswer={""}
                explanation={data.getMatchExplanations()[i]}
                />)
        }
        let single2 = [];
        for(let i = 0; i < 5; ++i) {
            single2.push(<CoupleOption letter={String.fromCharCode('А'.charCodeAt(0) + i)} subquestion={data.getMatch5Options()[i]} />)
        }
        let couples = [];
        for(let i = 0; i < 4; ++i) {
            couples.push([]);
            for(let j = 0; j < 5; ++j) {
                couples[i].push(<CoupleAnswer
                    number={(i + 1).toString()}
                    correctLetter={data.getMatchCorrectAnswers()[i]}
                    subquestion={data.getMatchSubquestions()[i]}
                    subanswer={data.getMatch5Options()[j]}
                    explanation={data.getMatchExplanations()[i]}
                    />)
            }
        }
        let used = [];
        for(let i = 0; i < 5; ++i) {
            used[i] = 0;
        }

        let result = [];
        for(let i = 0; i < 4; ++i) {
            let radios = document.getElementsByName('a[' + (i + 1).toString() + ']');
            let column = 'gg';
            for (let j = 0; j < radios.length; j++) {
                if (radios[j].checked) {
                    column = radios[j].value.charCodeAt(1) - 'a'.charCodeAt(0);
                }
            }
            console.log(column);
            if(column != 'gg') {
                console.log(column);
                used[column] = 1;
                result.push(couples[i][column]);
            }
            else {
                result.push(single1[i]);
            }
        }
        for(let i = 0; i < 5; ++i) {
            if(!used[i]) {
                result.push(single2[i]);
            }
        }
        return result;
    }

    upd = () => {
        this.setState({
            number: this.props.number,
        })
    }

    render() {
        console.log('asdsad')


        const data = this.state.data;
        let hidden = this.state.answered;
        console.log("!");
        console.log(this.state.checkedAnswers);
        console.log(data)
        console.log(this.state.number);
        console.log(this.props.updateQuestion);
        console.log(this.state.active);

        return (
            <div>
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
                            <CoupleOption letter={'f'} subquestion={'fdf'} />
                        </div>
                        <div className={s.answers_frame}>
                            <p className={s.choose}><strong>Обери одну відповідь</strong></p>
                            <div className={s.answers}>
                                {this.buildQA()}
                            </div>
                            <div class={s.table}>
                                <table class={s.select_answer}>
                                    <tbody>
                                        <tr>
                                            <th></th>
                                            <th>А</th>
                                            <th>Б</th>
                                            <th>В</th>
                                            <th>Г</th>
                                            <th>Д</th>
                                        </tr>
                                        <tr>
                                            <th class={s.r}>1</th>
                                            <td>
                                                <label>
                                                    <input type="radio" value="1a" name="a[1]" class={s.q_radio} onChange={this.upd}></input>
                                                    <span class={s.marker}></span>
                                                </label>
                                            </td>
                                            <td>
                                                <label>
                                                    <input type="radio" value="1b" name="a[1]" class={s.q_radio} onChange={this.upd}></input>
                                                    <span class={s.marker}></span>
                                                </label>
                                            </td>
                                            <td>
                                                <label>
                                                    <input type="radio" value="1c" name="a[1]" class={s.q_radio} onChange={this.upd}></input>
                                                    <span class={s.marker}></span>
                                                </label>
                                            </td>
                                            <td>
                                                <label>
                                                    <input type="radio" value="1d" name="a[1]" class={s.q_radio} onChange={this.upd}></input>
                                                    <span class={s.marker}></span>
                                                </label>
                                            </td>
                                            <td>
                                                <label>
                                                    <input type="radio" value="1e" name="a[1]" class={s.q_radio} onChange={this.upd}></input>
                                                    <span class={s.marker}></span>
                                                </label>
                                            </td>

                                        </tr>
                                        <tr>
                                            <th class={s.r}>2</th>
                                            <td>
                                                <label>
                                                    <input type="radio" value="2a" name="a[2]" class={s.q_radio} onChange={this.upd}></input>
                                                    <span class={s.marker}></span>
                                                </label>
                                            </td>
                                            <td>
                                                <label>
                                                    <input type="radio" value="2b" name="a[2]" class={s.q_radio} onChange={this.upd}></input>
                                                    <span class={s.marker}></span>
                                                </label>
                                            </td>
                                            <td>
                                                <label>
                                                    <input type="radio" value="2c" name="a[2]" class={s.q_radio} onChange={this.upd}></input>
                                                    <span class={s.marker}></span>
                                                </label>
                                            </td>
                                            <td>
                                                <label>
                                                    <input type="radio" value="2d" name="a[2]" class={s.q_radio} onChange={this.upd}></input>
                                                    <span class={s.marker}></span>
                                                </label>
                                            </td>
                                            <td>
                                                <label>
                                                    <input type="radio" value="2e" name="a[2]" class={s.q_radio} onChange={this.upd}></input>
                                                    <span class={s.marker}></span>
                                                </label>
                                            </td>

                                        </tr>
                                        <tr>
                                            <th class={s.r}>3</th>
                                            <td>
                                                <label>
                                                    <input type="radio" value="3a" name="a[3]" class={s.q_radio} onChange={this.upd}></input>
                                                    <span class={s.marker}></span>
                                                </label>
                                            </td>
                                            <td>
                                                <label>
                                                    <input type="radio" value="3b" name="a[3]" class={s.q_radio} onChange={this.upd}></input>
                                                    <span class={s.marker}></span>
                                                </label>
                                            </td>
                                            <td>
                                                <label>
                                                    <input type="radio" value="3c" name="a[3]" class={s.q_radio} onChange={this.upd}></input>
                                                    <span class={s.marker}></span>
                                                </label>
                                            </td>
                                            <td>
                                                <label>
                                                    <input type="radio" value="3d" name="a[3]" class={s.q_radio} onChange={this.upd}></input>
                                                    <span class={s.marker}></span>
                                                </label>
                                            </td>
                                            <td>
                                                <label>
                                                    <input type="radio" value="3e" name="a[3]" class={s.q_radio} onChange={this.upd}></input>
                                                    <span class={s.marker}></span>
                                                </label>
                                            </td>

                                        </tr>
                                        <tr>
                                            <th class={s.r}>4</th>
                                            <td>
                                                <label>
                                                    <input type="radio" value="4a" name="a[4]" class={s.q_radio} onChange={this.upd}></input>
                                                    <span class={s.marker}></span>
                                                </label>
                                            </td>
                                            <td>
                                                <label>
                                                    <input type="radio" value="4b" name="a[4]" class={s.q_radio} onChange={this.upd}></input>
                                                    <span class={s.marker}></span>
                                                </label>
                                            </td>
                                            <td>
                                                <label>
                                                    <input type="radio" value="4c" name="a[4]" class={s.q_radio} onChange={this.upd}></input>
                                                    <span class={s.marker}></span>
                                                </label>
                                            </td>
                                            <td>
                                                <label>
                                                    <input type="radio" value="4d" name="a[4]" class={s.q_radio} onChange={this.upd}></input>
                                                    <span class={s.marker}></span>
                                                </label>
                                            </td>
                                            <td>
                                                <label>
                                                    <input type="radio" value="4e" name="a[4]" class={s.q_radio} onChange={this.upd}></input>
                                                    <span class={s.marker}></span>
                                                </label>
                                            </td>

                                        </tr>
                                    </tbody>
                                </table>
                                <Next 
                                    answered={this.state.answered}
                                    callback={this.props.changeStatus}
                                    number={this.state.active}
                                />
                            </div>

                                    </tr>
                                </tbody>
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
        )
    }
}

export default Logic_Couples_4_5;
