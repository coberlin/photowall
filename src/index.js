import React, {Component} from 'react';
import ReactDom from 'react-dom';

const tasks = ['take out the trash', 'go for a walk'];

class List extends Component {
  render() {
    return <ol>
             {this.props.tasks.map((task, index) => <li key={index}>{task}</li>)}
           </ol>;
  }
}

class Title extends Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

class Main extends Component {
  render() {
    return <div>
             <Title title={'TODOS'}/>
             <List tasks={['Mow the lawn', 'Walk the dog']}/>
             <List tasks={['Haircut', 'Vacuum']}/>
             <List tasks={['DMV', 'Check the pool']}/>
           </div>;
  }
}

ReactDom.render(<Main />, document.getElementById('root'));
