import React, { Component } from 'react';

class TaskSortControl extends Component {
  onClick = (sortBy, sortValue) => {
    this.props.onSort(sortBy, sortValue);
  };

  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="true"
          >
            Sort
            <i className="fas fa-chevron-circle-down ml-5"></i>
          </button>
          <ul
            className="dropdown-menu"
            aria-labelledby="dropdownMenu1"
          >
            <li
              onClick={ () => this.onClick('name', 1) }
            >
              <a
                role="button"
                className={ (this.props.sortBy === 'name' && this.props.sortValue === 1) ? 'sort_selected' : ''}
              >
                <i className="fas fa-sort-alpha-down mr-5"/>
                Name A-Z
              </a>
            </li>
            <li
              onClick={ () => this.onClick('name', -1) }
            >
              <a
                role="button"
                className={ (this.props.sortBy === 'name' && this.props.sortValue === -1) ? 'sort_selected' : ''}
              >
                <i className="fas fa-sort-alpha-up mr-5"/>
                Name Z-A
              </a>
            </li>
            <li
              role="seperator"
              className="divider"
            />
            <li
              onClick={ () => this.onClick('status', 1) }
            >
              <a
                role="button"
                className={ (this.props.sortBy === 'status' && this.props.sortValue === 1) ? 'sort_selected' : ''}
              >
                Status: Active
              </a>
            </li>
            <li
              onClick={ () => this.onClick('status', -1) }
            >
            <a
              role="button"
              className={ (this.props.sortBy === 'status' && this.props.sortValue === -1) ? 'sort_selected' : ''}
            >
              Status: Disable
            </a>
          </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TaskSortControl;
