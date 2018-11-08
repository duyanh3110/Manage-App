import React, { Component } from 'react';
import TaskSearchControl from './TaskSearchControl';
import TaskSortControl from './TaskSortControl';

class TaskControl extends Component {
  render() {
    return (
      <div className="row mt-15">
        {/* Search */}
        <TaskSearchControl
          onSearch={ this.props.onSearch }
        />
        {/* Sort */}
        <TaskSortControl />
      </div>
    );
  }
}

export default TaskControl;
