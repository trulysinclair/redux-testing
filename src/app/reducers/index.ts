import * as todos from 'app/reducers/todos';
import { combineReducers } from 'redux';

export interface IState {
  todos: todos.IState;
}

export const initialState: IState = { todos: todos.initialState };

export const reducer = combineReducers<IState>({
  todos: todos.reducer,
});
