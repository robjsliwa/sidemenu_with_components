import React from 'react';

export default class MenuItem extends React.Component {
  render() {
    return <div className="menu-item">
      {this.props.children}
    </div>
  }
}
