import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Main from './Main';

const tasks = ['take out the trash', 'go for a walk'];

ReactDom.render(<Main />, document.getElementById('root'));
