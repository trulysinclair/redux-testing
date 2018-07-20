import { addTodo } from 'app/actions/todos';
import AddTodoForm from 'app/components/AddTodoForm';
import { connect } from 'react-redux';

export default connect<any, any, any>(
  null,
  { handleSubmit: addTodo },
)(AddTodoForm);
