import { toggleTodo } from 'app/actions/todos';
import TodoList from 'app/components/TodosList';
import { IState } from 'app/reducers';
import { getTodos } from 'app/selectors/todos';
import { connect } from 'react-redux';

const mapStateToProps = (state: IState) => ({ todos: getTodos(state) });
const mapDispatchToProps = { onTodoClicked: toggleTodo };

export default connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
