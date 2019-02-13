import React, { Component } from 'react';
import './question.css';

class Question extends Component {
    state = {
        questions: this.props.questions,
        questionNum: 1,
        questionTot: this.props.questions.length,
        questionId: this.props.questions[0].id,
        questionStatement: this.props.questions[0].statement,
        results: {}
    }
    handleClick = (event) => {
        console.log(event.target.getAttribute('value'))
    }
    render() {
        return(
            <div>
                <div className="question">
                    <div>Pregunta {this.state.questionNum}/{this.state.questionTot}</div>
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