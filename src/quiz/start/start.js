import React, { Component } from 'react';
import './start.css';

class Start extends Component {
    render() {
        return(
        <div>
            <div className="start-logo">
                Logo
            </div>
            <div className="start-text">
                ¿Quieres saber con qué carreras tienes más afinidad?   
            </div>
            <div className="start-button" onClick={this.props.handleClick}>
                Dale
            </div>
        </div>
        )
    }
}

export default Start;