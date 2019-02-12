import React, { Component } from 'react';
import './question.css';

class Question extends Component {
    handleClick = (event) => {
        console.log(event.target.getAttribute('value'))
    }
    render() {
        return(
            <div>
                <div className="question">
                    <div>Pregunta {this.props.questionNum}</div>
                    {this.props.questionStatement}
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