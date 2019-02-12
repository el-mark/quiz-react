import React from 'react';
import { render } from 'react-dom';
import Question from './src/question';
import './index.css'

const app = document.getElementById('app');

render(<Question questionNum='2/7' questionStatement='¿Te gusta leer?' />, app);
