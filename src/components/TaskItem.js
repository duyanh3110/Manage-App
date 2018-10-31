import React, { Component } from 'react';

class TaskItem extends Component {
  render() {
    return (
      <tr>
        <td>1</td>
        <td>Study React</td>
        <td className="text-center">
          <span className="label label-danger">Active</span>
        </td>
        <td className="text-center">
          <button
            type="button"
            className="btn btn-warning"
          >
            <i className="far fa-edit mr-5"></i>
            Edit
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-danger"
          >
            <i className="far fa-trash-alt mr-5"></i>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;
