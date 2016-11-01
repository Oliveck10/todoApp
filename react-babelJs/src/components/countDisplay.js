import React from 'react';

class TodoCount extends React.Component {
  render() {
    return <span className="todo-count">{this.props.remain}</span>
  }
}

export default TodoCount;
