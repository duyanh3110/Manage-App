import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm: true,
    }
  }

  componentWillMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      let tasks = JSON.parse(localStorage.getItem("tasks"));
      this.setState({
        tasks: tasks
      });
    }
  };

  onToggleForm = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
    });
  };

  onCloseForm = () => {
    this.setState({
      isDisplayForm: false
    });
  };

  randomId() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  };

  generateId() {
    return this.randomId() + this.randomId() + "-" + this.randomId() + this.randomId();
  };

  onSubmit = (data) => {
    let { tasks } = this.state;
    data.id = this.generateId();
    tasks.push(data);
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  onUpdateStatus = (id) => {
    let { tasks } = this.state;
    let index = this.findIndex(id);
    if (index !== -1){
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  };

  findIndex = (id) => {
    let { tasks } = this.state;
    let result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  }

  render() {
    let { tasks, isDisplayForm } = this.state;
    var elmTaskForm = isDisplayForm
          ? <TaskForm
              onCloseForm={ this.onCloseForm }
              onSubmit={ this.onSubmit }
            />
          : '';
    return (
      <div className="container">
        <h1 className="text-center mt-15">Manage Work</h1>
        <div className="row">
          <div className={ isDisplayForm === true ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
            {/* Form */}
            { elmTaskForm }
          </div>
          <div className={ isDisplayForm === true ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={ this.onToggleForm }
            >
              <i className="fa fa-plus mr-5" />
              Add Work
            </button>
            {/* Search and Sort */}
            <Control />
            {/* List */}
            <TaskList
              tasks={ tasks }
              onUpdateStatus={ this.onUpdateStatus }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
