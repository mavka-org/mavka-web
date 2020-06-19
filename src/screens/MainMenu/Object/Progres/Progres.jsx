import React from 'react';
import s from './../../MainMenu.module.css';
import { confirmAlert } from 'react-confirm-alert';
import g from './../../../Templates/Style.module.css';
import AlertConfirm from './../../../AlertConfirm/AlertConfirm'

class Progres extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }

    cancel = () => {
        this.setState({
            clicked: false
        })
    }

    customConfirm() {
        if(this.state.clicked) {
            return <AlertConfirm cancel={this.cancel} deleteTestInfo={this.props.deleteTestInfo} testID={this.props.testID}/>
        }
        else {
            return null;
        }
    }

    render() {
        return (
                <div className={s.skip}>
                    {this.customConfirm()}
                    <button className={g.btn} onClick={()=>{
                        this.setState({
                            clicked: true
                        })
                    }}>Скинути прогрес</button>
                    <div className={s.description} style={{ width: '130%', fontSize: '14px', lineHeight: '18px' }}>Ти втратиш прогрес, бали і рекомендовані теми, та зможеш практикувати та симулювати цей тест з нуля </div>
                </div>
        );
    }
}

export default Progres;
