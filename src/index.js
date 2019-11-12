import React, {Component} from 'react';
import ReactDom from 'react-dom';

const tasks = ['take out the trash', 'go for a walk'];

class List extends Component {
  render() {
    return <ol>
             {tasks.map((task, index) => <li key={index}>{task}</li>)}
           </ol>;
  }
}

class Title extends Component {
  render() {
    return <h1> Task List </h1>;
  }
}

class Main extends Component {
  render() {
    return <div>
             <Title />
             <List />
             <List />
             <List />
           </div>;
  }
}

ReactDom.render(<Main />, document.getElementById('root'));
