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
                        return(
                            <div className="degree" key={degree.id}>
                                <div className="degree-cover">
                                    <div className="degree-text">
                                        {degree.title} - {degree.score}
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