import ITodo from 'app/models/todo';
import * as React from 'react';

export interface ITodoListProps {
  todos: ITodo[];
  onTodoClicked: (todoId: number) => void;
}

export interface ITodoListState {}

export default class TodoList extends React.Component<
  ITodoListProps,
  ITodoListState
> {
  public constructor(props: ITodoListProps) {
    super(props);
  }

  public render() {
    const { todos, onTodoClicked } = this.props;

    return (
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={onTodoClicked.bind(this, todo.id)}
            style={{
              cursor: 'pointer',
              textDecoration: `${todo.done ? 'line-through' : ''}`,
            }}
          >
            {todo.name}
          </li>
        ))}
      </ul>
    );
  }
}
