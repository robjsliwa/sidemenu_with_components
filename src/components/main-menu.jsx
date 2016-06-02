import React from 'react';
import Menu from './menu';
import MenuItem from './menu-item';
import MenuViewContainer from './menu-view-container';

export default class MainMenu extends React.Component {
  render() {
    return <div>
      <div className="sidebar">
        <Menu>
          <div className="sidebar-header">
            <div>Main Menu</div>
          </div>
          <MenuItem>Component One</MenuItem>
          <MenuItem>Component Two</MenuItem>
          <MenuItem>Component Three</MenuItem>
          <MenuItem>Component Four</MenuItem>
          <MenuItem>Component Five</MenuItem>
          <MenuItem>Component Six</MenuItem>
        </Menu>
      </div>
      <div className="topbar">
        <div className="dropdown">
          <i className="dropdown-toggle fa fa-user" aria-hidden="true" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          </i>
          <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </div>
      </div>
      <MenuViewContainer />
    </div>
  }
}
