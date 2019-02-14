import React, { Component } from 'react';
import Question from '../quiz/question';
import './home.css';


class Home extends Component {
    state = {
        page: 1,
    }
    render(){
        return(
            <div className="layout">
        
                <Question questions={this.props.data.questions} />
            </div>
        )
    }
}

export default Home;