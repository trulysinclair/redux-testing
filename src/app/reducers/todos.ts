import { Action, ActionTypes } from '../actions/todos';
import ITodo from '../models/Todo';

export interface IState {
  todos: ITodo[];
}

export const initialState: IState = {
  todos: [],
};

export function reducer(state: IState = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.ADD_TODO: {
      const todo = action.payload.todo;

      return {
        ...state,
        todos: [...state.todos, todo],
      };
    }

    case ActionTypes.TOGGLE_TODO: {
      const { todoId } = action.payload;

      return {
        ...state,
        todos: state.todos.map(
          (todo) => (todo.id === todoId ? { ...todo, done: !todo.done } : todo),
        ),
      };
    }

    default:
      return state;
  }
}
