import { IState } from 'app/reducers';
import { createSelector } from 'reselect';

const getTodosState = (state: IState) => state.todos;

export const getTodos = createSelector([getTodosState], (s) => s.todos);
