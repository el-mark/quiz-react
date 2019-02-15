import React, { Component } from 'react';
import './home.css';
import Question from '../quiz/question/question';
import Start from '../quiz/start/start';
import Results from '../quiz/results/results';


class Home extends Component {
    state = {
        step: 2,
        results: {},
        degrees: []
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
        this.calculateScores();
    }
    updateResults = (results) => {
        this.setState({
            results: results,
        })
    }
    calculateScores = () => {
        var newDegrees = this.state.degrees;

        this.props.data.degrees.map(degree => {
            let degreePoints = 0;
            degree.points.map(point => {
                const sectionPoints = this.state.results[point.question].value * point.coef;
                degreePoints = degreePoints + sectionPoints;
            })
            degree.score = degreePoints * 20;
            
            newDegrees.push(degree);
        })
        
        const sortedNewDegrees = this.sortNewDegrees(newDegrees);

        console.log(sortedNewDegrees);

        this.setState({
            degrees: sortedNewDegrees,
        })
    }
    sortNewDegrees = (newDegrees) => {
        function compare(a,b) {
            if (a.score > b.score)
              return -1;
            if (a.score < b.score)
              return 1;
            return 0;
          }
          
          return newDegrees.sort(compare);
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
                        updateResults={this.updateResults}
                        handleResultsStep={this.handleResultsStep}
                    />
                }
                {
                    this.state.step === 3 &&
                    <Results degrees={this.state.degrees} />
                }
            </div>
        )
    }
}

export default Home;