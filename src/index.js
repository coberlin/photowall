import React from 'react';
import ReactDom from 'react-dom';

const tasks = ['take out the trash', 'go for a walk'];

const element = <ol> { tasks.map((task, index) => <li key={index}>{task}</li>) }
</ol>

ReactDom.render(element, document.getElementById('root'));
