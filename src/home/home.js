import React, { Component } from 'react';
import './home.css';
import Question from '../quiz/question';
import Start from '../quiz/start';


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
                        handleResultsStep={this.handleResultsStep}
                    />
                }
            </div>
        )
    }
}

export default Home;