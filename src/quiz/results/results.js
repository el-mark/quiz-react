import React, { Component } from 'react';
import './results.css';

class Results extends Component {
    render() {
        return(
            <div>
                <div className="start-logo">
                    Carreras con más afinidad:
                </div>
                {
                    this.props.degrees.map((degree) => {
                        const degreeStyle = {
                            backgroundImage: degree.img
                        }
                        return(
                            <div className="degree" key={degree.id} style={degreeStyle}>
                                <div className="degree-cover">
                                    <div className="degree-text">
                                        {degree.title} - {Math.round(degree.score)} pts
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Results;