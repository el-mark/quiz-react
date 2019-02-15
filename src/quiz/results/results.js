import React, { Component } from 'react';
import './results.css';

class Results extends Component {
    render() {
        return(
            <div>
                <div className="start-logo">
                    Carreras con más afinidad:
                </div>
                <div className="degree">
                    <div className="degree-cover">
                        <div className="degree-text">
                            Dise - 95pts
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Results;