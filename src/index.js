import React from 'react';
import ReactDom from 'react-dom';

const tasks = ['take out the trash', 'go for a walk'];

const element =
<div>
  <h1> Task List </h1>
	<ol> { tasks.map((task, index) => <li key={index}>{task}</li>) }</ol>
</div>

ReactDom.render(element, document.getElementById('root'));
