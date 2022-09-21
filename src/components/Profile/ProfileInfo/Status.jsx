import React, { Component } from 'react';

export default class Status extends Component {
  state = {
    editMode: false,
  };
  onActiveStatus = () => {
    this.setState({ editMode: true });
  };

  onDeactiveStatus = () => {
    this.setState({ editMode: false });
  };
  render() {
    return (
      <div>
        {!this.state.editMode ? (
          <div>
            <span onDoubleClick={this.onActiveStatus}>{this.props.status}</span>
          </div>
        ) : (
          <div>
            <input type="text" autoFocus={true} onBlur={this.onDeactiveStatus} />
          </div>
        )}
      </div>
    );
  }
}
