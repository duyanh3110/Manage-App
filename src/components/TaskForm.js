import React, { Component } from 'react';

class TaskForm extends Component {
  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            Add Work
            <span className="fa fa-times-circle text-right"></span>
          </h3>
        </div>
        <div className="panel-body">
          <form>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                className="form-control"
                name="name"
              />
            </div>
            <label>Status:</label>
            <select
              name="status"
              className="form-control"
            >
              <option value={true}>Active</option>
              <option value={false}>Disable</option>
            </select>
            <br/>
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-warning"
              >
                <i className="fa fa-plus mr-5"></i>
                Save
              </button>
              &nbsp;
              <button className="btn btn-danger">
                <i className="fa fa-times mr-5"></i>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;
