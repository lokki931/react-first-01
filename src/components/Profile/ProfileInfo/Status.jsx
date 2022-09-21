import React, { Component } from 'react';

export default class Status extends Component {
  state = {
    editMode: false,
    status: this.props.status,
  };
  onActiveStatus = () => {
    this.setState({ editMode: true });
  };

  onDeactiveStatus = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = (e) => {
    this.setState({ status: e.target.value });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }
  render() {
    return (
      <div>
        {!this.state.editMode ? (
          <div>
            <span onDoubleClick={this.onActiveStatus}>{this.props.status || '------'}</span>
          </div>
        ) : (
          <div>
            <input
              type="text"
              value={this.state.status}
              autoFocus={true}
              onBlur={this.onDeactiveStatus}
              onChange={this.onStatusChange}
            />
          </div>
        )}
      </div>
    );
  }
}
