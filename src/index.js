import React from 'react';
import ReactDom from 'react-dom';

const tasks = ['take out the trash', 'go for a walk'];

const element = React.createElement('ol', null, tasks.map((task, index) =>  React.createElement('li', {key: index}, task)))
ReactDom.render(element, document.getElementById('root'));
