import React from 'react';
import { render } from 'react-dom';
import data from './src/api.json';
import Home from './src/home/home'

const app = document.getElementById('app');

render(<Home data={data} />, app);
