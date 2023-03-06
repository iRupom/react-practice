import React from "react";

export default class Todo extends React.Component {
  state = {
    todo: "",
    warning: null,
  };

  handleInput = (e) => {
    const todo = e.target.value;
    const warning = todo.includes(".js")
      ? "You need to have JavaScript skill to complet the task"
      : null;

    this.setState({
      todo,
      warning,
    });
  };

  render() {
    const { todo, warning } = this.state;

    return (
      <div>
        <p>{todo}</p>
        <textarea
          name="todo"
          value={todo}
          onChange={this.handleInput}
        ></textarea>
        <h2>{warning || "Good choice !"}</h2>
      </div>
    );
  }
}
