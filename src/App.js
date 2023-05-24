import React from 'react';

class ToDoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      newTask: ''
    }
  }

  handleInputChange = (e) => {
    this.setState({ newTask: e.target.value })
  }

  handleAddTask = () => {
    if (this.state.newTask.trim() !== '') {
      this.setState({
        tasks: [...this.state.tasks, this.state.newTask],
        newTask: ''
      })
    }
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.newTask} onChange={this.handleInputChange} />
        <button onClick={this.handleAddTask}>Add</button>
        {this.state.tasks.map((task, index) => (
          <div key={index}>{task}</div>
        ))}
      </div>
    );
  }
}

export default ToDoList;
