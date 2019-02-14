import React, { Component } from 'react';
import './home.css';
import Question from '../quiz/question';
import Start from '../quiz/start';


class Home extends Component {
    state = {
        step: 1,
    }
    handleNextStep = () => {
        this.setState({
            step: 2,
        })
    }
    render(){
        return(
            <div className="layout">
                {
                    this.state.step === 1 &&
                    <Start handleClick={this.handleNextStep} />
                }
                {
                    this.state.step === 2 &&
                    <Question questions={this.props.data.questions} />
                }
            </div>
        )
    }
}

export default Home;