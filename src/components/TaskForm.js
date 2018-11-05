import React, { Component } from 'react';

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      status: false
    };
  }

  onCloseForm = () => {
    this.props.onCloseForm();
  };

  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    if (name === 'status') {
      value = target.value === 'true' ? true : false;
    };
    this.setState({
      [name]: value
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.onClear();
    this.onCloseForm();
  };

  onClear = () => {
    this.setState({
      name: '',
      status: false
    })
  };

  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            Add Work
            <span
              className="fa fa-times-circle text-right"
              onClick={ this.onCloseForm }
            />
          </h3>
        </div>
        <div className="panel-body">
          <form
            onSubmit={ this.onSubmit }
          >
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={ this.state.name }
                onChange={ this.onChange }
              />
            </div>
            <label>Status:</label>
            <select
              name="status"
              className="form-control"
              value={ this.state.status }
              onChange={ this.onChange }
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
              <button
                className="btn btn-danger"
                onClick={ this.onClear }
              >
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
