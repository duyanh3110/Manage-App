import React, { Component } from 'react';

class TaskSearchControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    };
  };

  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    });
  };

  onSearch = () => {
    this.props.onSearch(this.state.keyword);
  };

  render() {
    let { keyword } = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
          <input
            type="text"
            name="keyword"
            className="form-control"
            placeholder="Search..."
            value={ keyword }
            onChange={ this.onChange }
          />
          <span className="input-group-btn">
            <button
              type="button"
              className="btn btn-primary"
              onClick={ this.onSearch }
            >
              <i className="fa fa-search mr-5"></i>
              Search
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default TaskSearchControl;
