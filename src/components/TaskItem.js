import React, { Component } from 'react';

class TaskItem extends Component {
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id);
  };

  onDelete = () => {
    this.props.onDelete(this.props.task.id);
  };

  onUpdate = () => {
    this.props.onUpdate(this.props.task.id);
  };

  render() {
    let { task, index } = this.props;
    return (
      <tr>
        <td>{ index }</td>
          <td>{ task.name }</td>
        <td className="text-center">
          <span
            className={ task.status === true ? 'label label-danger' : 'label label-success'}
            onClick={ this.onUpdateStatus }
          >
            { task.status === true ? "Active" : "Disable"}
          </span>
        </td>
        <td className="text-center">
          <button
            type="button"
            className="btn btn-warning"
            onClick={ this.onUpdate }
          >
            <i className="far fa-edit mr-5"></i>
            Edit
          </button>
          &nbsp;
          <button
            type="button"
            className="btn btn-danger"
            onClick={ this.onDelete }
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
