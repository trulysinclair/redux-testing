import ITodo from 'app/models/todo';

let nextId = 0;

export enum ActionTypes {
  ADD_TODO = '[TODOS] ADD_TODO',
  TOGGLE_TODO = '[TODOS] TOGGLE_TODO',
}

export interface IAddTodoAction {
  type: ActionTypes.ADD_TODO;
  payload: { todo: ITodo };
}

export interface IToggleTodoAction {
  type: ActionTypes.TOGGLE_TODO;
  payload: { todoId: number };
}

export function addTodo(name: string): IAddTodoAction {
  return {
    payload: {
      todo: {
        done: false,
        id: nextId++,
        name,
      },
    },
    type: ActionTypes.ADD_TODO,
  };
}

export function toggleTodo(todoId: number): IToggleTodoAction {
  return { type: ActionTypes.TOGGLE_TODO, payload: { todoId } }; // {todoId} is a shortcut for {todoId: todoId}
}

export type Action = IAddTodoAction | IToggleTodoAction;
