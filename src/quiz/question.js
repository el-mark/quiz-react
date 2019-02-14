import React, { Component } from 'react';
import './question.css';

class Question extends Component {
    state = {
        questions: this.props.questions,
        questionNum: 0,
        questionTot: this.props.questions.length,
        questionId: this.props.questions[0].id,
        questionStatement: this.props.questions[0].statement,
        results: []
    }
    handleClick = (event) => {
        const chosenValue = event.target.getAttribute('value');
        const results = this.generateResults(chosenValue);

        const questionNum = this.state.questionNum;
        
        this.setState({
            results: results,
            questionNum: this.state.questionNum + 1,
            questionStatement: this.props.questions[questionNum].statement,
            questionId: this.props.questions[questionNum].id,
        })
    }
    generateResults = (chosenValue) => {
        console.log('inside GenerateResults');
        const thisResult = {
            "id": this.state.questionId,
            "statement": this.state.questionStatement,
            "value": chosenValue
        }
        console.log('thisResult');
        console.log(thisResult);
        var results = this.state.results;
        results.push(thisResult);
        return results;
    }
    render() {
        return(
            <div>
                <div className="question">
                    <div>Pregunta {this.state.questionNum+1}/{this.state.questionTot}</div>
                    {this.state.questionStatement}
                </div>
                <div className="answer" onClick={this.handleClick} value="1">
                    <div>1</div>
                    Me encanta
                </div>
                <div className="answer" onClick={this.handleClick} value="2">
                    <div>2</div>
                    Me gusta
                </div>
                <div className="answer" onClick={this.handleClick} value="3">
                    <div>3</div>
                    Neutral
                </div>
                <div className="answer" onClick={this.handleClick} value="4">
                    <div>4</div>
                    No me gusta
                </div>
                <div className="answer" onClick={this.handleClick} value="5">
                    <div>5</div>
                    Lo detesto
                </div>
            </div>
        )
    }
}

export default Question;