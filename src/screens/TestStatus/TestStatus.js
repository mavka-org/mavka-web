import React, {Component} from "react";

class TestStatus extends Component {

    constructor(props) {
        super(props);
        console.log(props.test);
    }
    async addCourseToUser () {
        /*const response = await axios.post(
            'https://us-central1-mavka-c5c01.cloudfunctions.net/addCourseToUser',
            {
                token: this.props.token,
                courseID: this.props.test.id,
                courseStatus: "practice"
            },
            { headers: { 'Content-Type': 'text/plain' } }
        )*/
    }

    render() {
        const NotStarted = "not started";
        const Practice = "practice";
        const Simulation = "simulation";
        console.log(this.props.test);
        if (this.props.test.status === NotStarted) {
            return (
                <div>
                    <button onClick={() => {

                    }}>Симуляція</button>
                    <button onClick={async() => {
                        await this.addCourseToUser()
                    }}>Практика</button>
                </div>
            )
        }
        if (this.props.test.status === Simulation) {
            return (
                <div>
                    <button onClick={() => {

                    }}>Переглянути помилки</button>
                </div>
            )
        }
        return (
            <div>
                <button onClick={() => {

                }}>Практика</button>
            </div>
        )
    }
}
export default TestStatus;
