import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import './warning.css'
class Warn extends Component {
    state = {}
    getUsername = () => {
        let user_name = localStorage.getItem("cbt_username");
        this.setState({
            redirectResult: false,
            userName: user_name
        })
    }
    componentDidMount() {
        this.getUsername()
    }
    onSubmit = () => {
        this.setState({
            redirectResult: true
        })
    }
    render() {
        return (
            <div className='fullSubmitWarn bg-light p-5'>
                <h1>Are you Sure you want to submit the test now {this.state.userName} if
                    you do so now there is no turning back...</h1>
                <h2>Click <b>Submit</b> to submit of <b>Back</b> to return back to the test</h2>
                <div className="warnsubmitandback">
                    <button className='backToTest' onClick={this.props.propsOnBack}>Back</button>
                    <button className='submitTheTest' onClick={this.onSubmit}>Submit</button>
                </div>
                {this.state.redirectResult && <Redirect to="/cbtresult" />}
            </div>
        );
    }
}

export default Warn;