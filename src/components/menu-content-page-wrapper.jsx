import React from 'react';
import SideMenuStore from '../stores/sidemenu-store';
import SideMenuActions from '../actions/sidemenu-actions';

export default class MenuContentPageWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _selectedPage: false
    }
  }

  componentDidMount() {
    SideMenuStore.addChangeListener(this._onSelectionMade.bind(this));
    if (this.props.default) {
      SideMenuActions.selectMenu(this.props.default);
    }
  }

  componentWillUnmount() {
    SideMenuStore.removeChangeListener(this._onSelectionMade.bind(this));
  }

  _onSelectionMade() {
    this.setState({
      _selectedPage: SideMenuStore.selectedMenu
    });
  }

  render() {
    return <div>
      {this.props.children.map((page) => {
        if (page.props.id === this.state._selectedPage) {
          return page;
        }
      })}
    </div>
  }
}
