import React, { Component } from 'react';

class TaskItem extends Component {
  render() {
    let { task, index } = this.props;
    return (
      <tr>
        <td>{ index }</td>
          <td>{ task.name }</td>
        <td className="text-center">
          <span className={ task.status === true ? 'label label-danger' : 'label label-success'}>{ task.status === true ? "Active" : "Disable"}</span>
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
