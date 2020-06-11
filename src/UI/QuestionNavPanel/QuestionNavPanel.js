import React, {Component} from "react";
import ButtonQNav from "../ButtonQNav";
import DropdownButton from "react-bootstrap/DropdownButton";
import styled from "styled-components";

class QuestionNavPanel extends Component {

    update(newCurrent) {
        let buttons = [...this.state.buttons];
        buttons[this.state.current - 1].active = false;
        buttons[newCurrent - 1].active = true;
        this.setState({
            buttons: buttons,
            current: newCurrent
        });
    };

    updateWindowDimensions() {
        this.setState({
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth
        });
    }

    random = () => Math.random() > 0.5;

    constructor (props) { // сейчас это просто количество вопросов в тесте. Когда функции будут готовы все пропишу
        super(props);
        let list = props.list;

        let getStatus = () => this.random();

        let buttons = [];
        for (let i = 0; i < list; i++) {
            buttons.push({
                pushed: () => {
                    document.getElementById("fakeButton").click(); // это надо, чтобы dropdown пропадал по клику
                    this.update(i + 1)
                },
                status: getStatus(),
                active: i == 0
            });
        }


        this.state = {
            current: 1,
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
        const delta = 6;
        let current = this.state.current;
        let allButtons = this.state.buttons;

        const styles = {
            border: "1px solid black",
            borderRadius: "5px",
            width: this.getWidth(7.4),
            marginLeft: this.getWidth(0.22)
        };


        let middle = allButtons.map((button, index) => {
            if (Math.abs(index - current + 1) > delta) return null;
            return this.htmlButton(button, index);
        });

        let left = allButtons.map((button, index) => {
            if (Math.abs(index - current + 1) <= delta || index >= current - 1) return null;
            return this.htmlButton(button, index);
        });

        let right = allButtons.map((button, index) => {
            if (Math.abs(index - current + 1) <= delta || index <= current - 1) return null;
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
                {left.length > 0 ? (
                    <div>
                        <div>

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
                ) : null}
                {middle}
                {right.length > 0 ? (
                    <div  style={{
                        marginLeft: this.getWidth(0.22)
                    }}>
                        <div>
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
                ) : null}
            </div>
        );
    }
}
export default QuestionNavPanel;