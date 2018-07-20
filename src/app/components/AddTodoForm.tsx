import * as React from 'react';

export interface IAddTodoFormProps {
  handleSubmit: (value: string) => void;
}

export interface IAddTodoFormState {
  value: string;
}

export default class AddTodoForm extends React.Component<
  IAddTodoFormProps,
  IAddTodoFormState
> {
  public constructor(props: IAddTodoFormProps) {
    super(props);

    this.state = { value: '' };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  public render() {
    const { value } = this.state;

    return (
      <form onSubmit={this._handleSubmit}>
        <input type="text" value={value} onChange={this._handleChange} />
        <button type="submit">Add</button>
      </form>
    );
  }

  private _handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value });
  }

  private _handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!this.state.value.trim()) {
      return;
    }

    this.props.handleSubmit(this.state.value);
    this.setState({ value: '' });
  }
}
