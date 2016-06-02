import React from 'react';
import SideMenuActions from '../actions/sidemenu-actions';
import SideMenuStore from '../stores/sidemenu-store';

export default class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _isSelected: false
    }
  }

  componentDidMount() {
    SideMenuStore.addChangeListener(this._onSelectionMade.bind(this));
  }

  componentWillUnmount() {
    SideMenuStore.removeChangeListener(this._onSelectionMade.bind(this));
  }

  _onSelectionMade() {
    this.setState({
      _isSelected: SideMenuStore.selectedMenu === this.props.id
    });
  }

  _handleSelectedMenu(event) {
    SideMenuActions.selectMenu(this.props.id);
  }

  render() {
    return <div
        className={this.state._isSelected ? "menu-item-selected" : "menu-item"}
        onClick={this._handleSelectedMenu.bind(this)}>
      {this.props.children}
    </div>
  }
}
