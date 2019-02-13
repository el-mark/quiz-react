import React from 'react';
import { render } from 'react-dom';
import Question from './src/question';
import './index.css'
import data from './src/api.json'

const app = document.getElementById('app');

render(<Question questions={data.questions} />, app);
