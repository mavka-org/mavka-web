import React from 'react';
import List from '../../UI/List'
import firebase from "../../global"
import { Redirect} from 'react-router-dom';


export class Subject extends React.Component{
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
    render() {
        if(this.state.user == 25){
            return(<div></div>)
        }
        if(this.state.user) {
            return( 
                <div>
                   
                </div>
            )
        }
        else {
            return(<Redirect to="/login"/>)
        }

    }
}

export default Subject;