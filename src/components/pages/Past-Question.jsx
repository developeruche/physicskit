import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './pastquestion.css'
import Pquestion18 from './pquestion/Pquestion18'
import Pquestion19 from './pquestion/Pquestion19'
import Pquestion20 from './pquestion/Pquestion20'
import Pquestion21 from './pquestion/Pquestion21'
import Pquestion22 from './pquestion/Pquestion22'
import Pquestion23 from './pquestion/Pquestion23'
import Pquestion24 from './pquestion/Pquestion24'
import Pquestion25 from './pquestion/Pquestion25'
import Pquestion26 from './pquestion/Pquestion26'
import Pquestion27 from './pquestion/Pquestion27'
import Pquestion28 from './pquestion/Pquestion28'
import Pquestion29 from './pquestion/Pquestion29'
import Pquestion210 from './pquestion/Pquestion210'
import Pquestion211 from './pquestion/Pquestion211'
import Pquestion212 from './pquestion/Pquestion212'
import Pquestion213 from './pquestion/Pquestion213'
import Pquestion214 from './pquestion/Pquestion214'
import Pquestion215 from './pquestion/Pquestion215'
import Pquestion216 from './pquestion/Pquestion216'
import Pquestion217 from './pquestion/Pquestion217'
import Pquestion218 from './pquestion/Pquestion218'

class PastQuestion extends Component {
    state = {
        currentPqindex: 1,
        questionSubject: 'Thermal Physic and properties of matter',
        questionType: 'A',
        questionYear: [1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
        questionsArrary: [Pquestion18, Pquestion19, Pquestion20, Pquestion21, Pquestion22, Pquestion23, Pquestion24, Pquestion25, Pquestion26, Pquestion27, Pquestion28, Pquestion29, Pquestion210, Pquestion211, Pquestion212, Pquestion213, Pquestion214, Pquestion215, Pquestion216, Pquestion217, Pquestion218]

    }
    deployPQuestion = () => {

    }
    getSubjectTitle = () => {
        return (
            this.state.questionSubject
        )
    }
    getSubjectYear = () => {
        return (
            this.state.questionYear[this.state.currentPqindex - 1]
        )
    }
    getSubjectType = () => {
        return (
            this.state.questionType
        )
    }
    getPastQuestionSlide = (x) => {
        return (
            this.state.questionsArrary[x - 1]
        )
    };
    /** Function for handling previous chapter slide*/

    handlePrePastQuestion = () => {
        if (this.state.currentPqindex <= 1) {

        } else {
            this.setState({
                currentPqindex: this.state.currentPqindex - 1
            })
            this.getPastQuestionSlide(this.state.currentPqindex)
        }
    }

    /** Function for handling next chapter slide */
    handleNextPastQuestion = () => {
        if (this.state.currentPqindex >= this.state.questionsArrary.length) {

        } else {
            this.setState({
                currentPqindex: this.state.currentPqindex + 1
            })
            this.getPastQuestionSlide(this.state.currentPqindex)
        }
    }

    animatePqBurger = () => {
        document.querySelector('.pq-line1').classList.toggle('Apq-line1')
        document.querySelector('.pq-line2').classList.toggle('Apq-line2')
        document.querySelector('.pq-line3').classList.toggle('Apq-line3')
        document.querySelector('.pq-navigator').classList.toggle('Apq-navigator')
    }
    render() {
        return (

            <>
                <div className='full-past-question p-1'>
                    <div className='past-section container-fluid'>
                        <h1 className='p-2 headingone'>Past Question Section</h1>
                    </div>
                    <div className='text-center'>
                        <h2 className='haedingtwo'>{this.getSubjectTitle()}</h2>
                    </div>
                    <div className='text-center'>
                        <p>Year {this.getSubjectYear()}</p>
                    </div>
                    <div className='text-center'>
                        <p>Question Type {this.getSubjectType()}</p>
                    </div>
                    {
                        this.state.questionsArrary[this.state.currentPqindex - 1].map(singleQuestion =>
                            <div className="questandoption" key={singleQuestion.id}>
                                <div className="onlyquestion">
                                    <p className="questionText">
                                        {singleQuestion.id}. {singleQuestion.question}
                                    </p>
                                </div>
                                <div className="onlyOptions">
                                    {
                                        singleQuestion.options.map((option, index) =>
                                            <div className="singleOption">
                                                <p className='option_label'>{index === 0 ? "A" : "" || index === 1 ? "B" : "" || index === 2 ? "C" : "" || index === 3 ? "D" : "" || index === 4 ? "E" : ""}. </p> {option}
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        )

                    }

                    <div className='pagenav'>
                        <span onClick={this.handlePrePastQuestion}>
                            <i className="fas fa-arrow-circle-left controller"></i>
                        </span>
                        <span onClick={this.handleNextPastQuestion}>
                            <i className="fas fa-arrow-circle-right controller"></i>
                        </span>
                    </div>
                    <div className='container-fluid text-center'><span>{this.state.currentPqindex}</span> of <span>{this.state.questionsArrary.length}</span> Years</div>
                </div>
            </>
        );
    }
}

export default PastQuestion;