import { Action } from 'app/actions/todos';
import { IState, reducer } from 'app/reducers';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

const store = createStore<IState, Action, {}, {}>(
  reducer,
  applyMiddleware(logger),
);

export default store;
