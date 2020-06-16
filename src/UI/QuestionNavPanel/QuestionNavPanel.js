import React, {Component} from "react";
import ButtonQNav from "../ButtonQNav";
import DropdownButton from "react-bootstrap/DropdownButton";
import styled from "styled-components";

class QuestionNavPanel extends Component {

    updateWindowDimensions() {
        this.setState({
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth
        });
    }

    componentDidUpdate (prevProps) {
        if (this.props != prevProps) {
            let getStatus = (i) => ((i + 1) in this.props.checkedAnswers);
            let buttons = [...this.state.buttons];
            for(let i = 0; i < buttons.length; i++) {
                buttons[i].status = getStatus(i);
            }
            buttons[prevProps.active - 1].active = false;
            buttons[this.props.active - 1].active = true;
            this.setState({
                checkedAnswers: this.props.checkedAnswers,
                buttons: buttons,
                current: this.props.active
            })
        }
    }


    constructor (props) { // сейчас это просто количество вопросов в тесте. Когда функции будут готовы все пропишу
        super(props);
        let list = props.list;

        let buttons = [];
        for (let i = 0; i < list; i++) {
            buttons.push({
                pushed: () => {
                    document.getElementById("fakeButton").click(); // это надо, чтобы dropdown пропадал по клику
                    this.props.updateQuestion(i + 1);
                    //this.update(i + 1);
                },
                status: false,
                active: i == 0
            });
        }

        this.state = {
            checkedAnswers: this.props.checkedAnswers,
            current: this.props.active,
            n: list,
            buttons: buttons,
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth
        };

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    getWidth = width => this.state.windowWidth * width / 100.0;
    getHeight = height => this.state.windowHeight * height / 100.0;



    htmlButton = (button, index) => (
        <ButtonQNav
            pushed={button.pushed}
            number={index + 1}
            key={index + 1}
            backColor={this.backColor(button)}
            color={this.colorText(button)}
            height={this.getHeight(button.active ? 4.5 : 3)}
            width={this.getWidth(2.2)}
            marginLeft={this.getWidth(0.22)}
        />
    );

    backColor = status => status.active ? "#FFBE0B" : status.status ? "#000000" : "#FFFFFF";
    colorText = status => status.active ? "#000000" : status.status ? "#FFFFFF" : "#000000";

    render() {
        const delta = 10;
        let n = this.state.n;
        let current = this.state.current;
        let allButtons = this.state.buttons;

        const styles = {
            border: "1px solid black",
            borderRadius: "5px",
            width: this.getWidth(7.4),
            marginLeft: this.getWidth(0.22)
            
        };
        let l = Math.max(current - delta / 2, 1);
        let r = Math.min(n, l + delta);
        if (r == n) {
            l = Math.max(r - delta, 1);
        }

        let middle = allButtons.map((button, index) => {
            if (l - 1  > index || r - 1 < index) return null;
            return this.htmlButton(button, index);
        });

        let left = allButtons.map((button, index) => {
            if (l - 1 <= index) return null;
            return this.htmlButton(button, index);
        });

        let right = allButtons.map((button, index) => {
            if (r - 1 >= index) return null;
            return this.htmlButton(button, index);
        });

        let check = elem => elem != null;

        left = left.filter(check);
        middle = middle.filter(check);
        right = right.filter(check);

        /*const dr = () => (
        );
        const styledDr = styled(dr)`
            color: red;
        `;*/

        console.log('?')
        return (
            <div style={{
                display: "flex",
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "flex-end"
            }}>
                <style type="text/css">
                    {`
                     #my-dropdown {
                        border-radius: 5px;
                        font-size: 14px;
                        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
                        border-width: 1px;
                        background-color: white;
                        width:` + this.getWidth(2.2) + `px;
                        height:` + this.getHeight(3) + `px;
                    }
                    `}
                </style>
                <button
                    id={"fakeButton"}
                    style={{
                        visibility: "hidden"
                    }}
                />
                <div>
                    <div style={{opacity: left.length > 0 ? 1 : 0.4}}>
                        <DropdownButton
                            key={'left'}
                            drop={'left'}
                            title={'⯇'}
                            id={"my-dropdown"}
                        >
                            <div style={styles}>
                                {left}
                            </div>
                        </DropdownButton>
                    </div>
                </div>
                {middle}
                <div  style={{
                    marginLeft: this.getWidth(0.22)
                }}>
                    <div style={{opacity: right.length > 0 ? 1 : 0.4}}>
                        <DropdownButton
                            key={'right'}
                            drop={'right'}
                            title={'⯈'}
                            id={"my-dropdown"}
                        >
                            <div style={styles}>
                                {right}
                            </div>
                        </DropdownButton>
                    </div>
                </div>
            </div>
        );
    }
}
export default QuestionNavPanel;
