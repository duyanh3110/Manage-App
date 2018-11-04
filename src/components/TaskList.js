import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
  render() {
    let { tasks } = this.props;
    let elmTasks = tasks.map((task, index) => {
      return <TaskItem key={ task.id } index={ index } task={ task } />;
    });
    return (
      <div className="row mt-15">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <table className="table table-bordered table-hover">
            <thead>
            <tr>
              <th className="text-center">Index</th>
              <th className="text-center">Name</th>
              <th className="text-center">Status</th>
              <th className="text-center">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td></td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="filterName"
                />
              </td>
              <td>
                <select
                  name="filterStatus"
                  className="form-control"
                >
                  <option value={-1}>All</option>
                  <option value={0}>Disable</option>
                  <option value={1}>Active</option>
                </select>
              </td>
              <td></td>
            </tr>
            {/* Task Item */}
            { elmTasks }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TaskList;
