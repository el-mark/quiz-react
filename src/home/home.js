import React, { Component } from 'react';
import './home.css';
import Question from '../quiz/question/question';
import Start from '../quiz/start/start';
import Results from '../quiz/results/results';


class Home extends Component {
    state = {
        step: 2,
    }
    handleQuizStep = () => {
        this.setState({
            step: 2,
        })
    }
    handleResultsStep = () => {
        this.setState({
            step: 3,
        })
    }
    calculateResults() {
    }
    render(){
        return(
            <div className="layout">
                {
                    this.state.step === 1 &&
                    <Start handleClick={this.handleQuizStep} />
                }
                {
                    this.state.step === 2 &&
                    <Question 
                        questions={this.props.data.questions}
                        results={this.props.results}
                        handleResultsStep={this.handleResultsStep}
                    />
                }
                {
                    this.state.step === 3 &&
                    <Results />
                }
            </div>
        )
    }
}

export default Home;