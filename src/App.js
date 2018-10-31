import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center mt-15">Manage Work</h1>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            {/* Form */}
            <TaskForm />
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button
              type="button"
              className="btn btn-primary"
            >
              <i className="fa fa-plus mr-5"></i>
              Add Work
            </button>
            {/* Search and Sort */}
            <Control />
            {/* List */}
            <TaskList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
