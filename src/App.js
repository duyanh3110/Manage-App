import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm: false,
      taskEditing: null,
      filter: {
        name: '',
        status: -1
      },
      keyword: ''
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
    if( this.state.isDisplayForm && this.state.taskEditing !== null) {
      this.setState({
        isDisplayForm: true,
        taskEditing: null
      });
    } else {
      this.setState({
        isDisplayForm: !this.state.isDisplayForm,
        taskEditing: null
      });
    }
  };

  onCloseForm = () => {
    this.setState({
      isDisplayForm: false
    });
  };

  onShowForm = () => {
    this.setState({
      isDisplayForm: true
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
    if (data.id === '') {
      data.id = this.generateId();
      tasks.push(data);
    } else {
      // Editing
      let index = this.findIndex(data.id);
      tasks[index] = data;
    }
    this.setState({
      tasks: tasks,
      taskEditing: null
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  onUpdateStatus = (id) => {
    let { tasks } = this.state;
    let index = this.findIndex(id);
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  };

  onDelete = (id) => {
    let { tasks } = this.state;
    let index = this.findIndex(id);
    if (index !== -1) {
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks
      });
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.onCloseForm();
  };

  onUpdate = (id) => {
    let { tasks } = this.state;
    let index = this.findIndex(id);
    let taskEditing = tasks[index];
    this.setState({
      taskEditing: taskEditing
    });
    this.onShowForm();
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
  };

  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus
      }
    });
  };

  onSearch = (keyword) => {
    this.setState({
      keyword: keyword
    });
  };

  render() {
    let { tasks, isDisplayForm, taskEditing, filter, keyword } = this.state;

    // Filter
    if(filter) {
      if(filter.name) {
        tasks = tasks.filter((task) => {
          return task.name.toLowerCase().indexOf(filter.name) !== -1;
        });
      }
      tasks = tasks.filter((task) => {
        if (filter.status === -1) {
          return task;
        } else {
          return task.status === ( filter.status === 1 ? true : false);
        }
      })
    }

    // TaskSearchControl
    if(keyword) {
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(keyword) !== -1;
      });
    }

    // Generate TaskForm with condition
    var elmTaskForm = isDisplayForm
          ? <TaskForm
              onCloseForm={ this.onCloseForm }
              onSubmit={ this.onSubmit }
              task={ taskEditing }
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
            {/* TaskSearchControl and Sort */}
            <TaskControl
              onSearch={ this.onSearch }
            />
            {/* List */}
            <TaskList
              tasks={ tasks }
              onUpdateStatus={ this.onUpdateStatus }
              onDelete={ this.onDelete }
              onUpdate={ this.onUpdate }
              onFilter={ this.onFilter }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
