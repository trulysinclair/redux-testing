import AddTodo from 'app/containers/AddTodo';
import TodoList from 'app/containers/Todos';
import * as React from 'react';

export class App extends React.Component {
  public render() {
    return (
      <div style={{ fontFamily: 'Roboto' }}>
        <h1>Redux Blog</h1>
        <AddTodo />
        <TodoList />
      </div>
    );
  }
}
