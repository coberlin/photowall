import React, {Component} from 'react';
import List from './List';
import Title from './Title';

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

export default Main;