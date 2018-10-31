import React, { Component } from 'react';

class Sort extends Component {
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
            <li>
              <a
                role="button"
                className="sort_selected"
              >
                <i className="fas fa-sort-alpha-down mr-5"/>
                Name A-Z
              </a>
            </li>
            <li>
              <a
                role="button"
              >
                <i className="fas fa-sort-alpha-up mr-5"/>
                Name Z-A
              </a>
            </li>
            <li
              role="seperator"
              className="divider"
            />
            <li>
              <a
                role="button"
              >
                Status: Active
              </a>
            </li><li>
            <a
              role="button"
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

export default Sort;
