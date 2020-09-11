import React, { Component } from 'react';
import authorImg from './img/author.jpg'
import Typing from 'react-typing-animation';
import { Redirect } from "react-router-dom";
import "./result.css"
import "./cbtwelcome.css"
class Result extends Component {
    state = {
        cbtLength: '',
        scoreAAvarge: false,
        scoreBAvarge: false,
        scoreEAvarge: false,
        authourRemark: true,
        scoreFromSD: '',
        userName: '',
        cbtPercentage: '',
        noResult: false
    }
    comfirmResult = () => {
        if (localStorage.cbt_username === null && localStorage.cbt_score === null && isNaN(localStorage.cbt_lenght)) {
            alert('System detects you are not login, Click OK and you would be redirected tot he login page');
            this.setState({
                noResult: true
            })
        }
    }
    getItemsFromLocal = () => {
        let newScore = localStorage.getItem('cbt_score')
        let newUsername = localStorage.getItem('cbt_username')
        let newCbtLenght = localStorage.getItem('cbt_lenght')
        let percent = Math.floor((newScore / newCbtLenght) * 100)
        this.setState(
            {
                scoreFromSD: newScore,
                userName: newUsername,
                cbtLength: newCbtLenght,
                cbtPercentage: percent
            }
        )
        if (percent > 50) {
            this.setState({
                scoreAAvarge: true
            })
        }
        if (percent === 50) {
            this.setState({
                scoreEAvarge: true
            })
        }
        if (percent < 50) {
            this.setState({
                scoreBAvarge: true
            })
        }
    }
    componentDidMount() {
        this.getItemsFromLocal()
        this.comfirmResult()
    }

    render() {
        return (<>
            {this.state.noResult && <Redirect to="/cbtwelcome" />}
            {
                this.state.scoreAAvarge &&
                <div className="authorRemark">
                    <div className="authorImageCon">
                        <div className="authorImage">
                            <img className='authorImg' src={authorImg} alt={"display of author"} />

                        </div>
                    </div>
                    <Typing speed={50} className='p5'>
                        <h1> Nice Work {this.state.userName}</h1>
                        <p className='authour-s-text'> You have done Exceptionally well keep it up</p>
                        <p className='authour-s-text'> Your result is above average</p>
                    </Typing>
                </div>
            }
            {
                this.state.scoreEAvarge &&
                <div className="authorRemark">
                    <div className="authorImageCon">
                        <div className="authorImage">
                            <img className='authorImg' src={authorImg} alt={"display of author"} />

                        </div>
                    </div>

                    <Typing speed={50} className='p5'>
                        <h1> Nice Work {this.state.userName}</h1>
                        <p className='authour-s-text'> You have done well, but you can do better that this</p>
                        <p className='authour-s-text'> Your result is average try harder next time</p>
                    </Typing>
                </div>
            }
            {
                this.state.scoreBAvarge &&
                <div className="authorRemark">
                    <div className="authorImageCon">
                        <div className="authorImage">
                            <img className='authorImg' src={authorImg} alt={"display of author"} />

                        </div>
                    </div>
                    <Typing speed={50} className='p5'>
                        <h1> Poor performance {this.state.userName}</h1>
                        <p className='authour-s-text'> Your result is below average, please try harder next time.</p>
                    </Typing>
                </div>
            }
            <div className="full-result">
                <div className="resultTable">
                    <table className='resulttable'>
                        <tr>
                            <th>Name</th>
                            <th>Score</th>
                            <th>Percentage</th>
                        </tr>
                        <tr>
                            <td>{this.state.userName}</td>
                            <td>{this.state.scoreFromSD}</td>
                            <td>{this.state.cbtPercentage} %</td>
                        </tr>
                    </table>
                </div>
            </div>


        </>
        );
    }
}

export default Result;