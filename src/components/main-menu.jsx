import React from 'react';
import Menu from './menu';
import MenuItem from './menu-item';
import MenuContentPageWrapper from './menu-content-page-wrapper';
import PageOne from './page-one';
import PageTwo from './page-two';
import PageThree from './page-three';
import PageFour from './page-four';

export default class MainMenu extends React.Component {
  render() {
    return <div className="wrapper">
      <div className="sidebar">
        <Menu>
          <div className="sidebar-header">
            <div>Main Menu</div>
          </div>
          <MenuItem id="1">Component One</MenuItem>
          <MenuItem id="2">Component Two</MenuItem>
          <MenuItem id="3">Component Three</MenuItem>
          <MenuItem id="4">Component Four</MenuItem>
        </Menu>
      </div>
      <div className="page-content-wrapper">
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
        <div className="container-fluid">
          <MenuContentPageWrapper default="2">
            <PageOne id="1" />
            <PageTwo id="2" />
            <PageThree id="3" />
            <PageFour id="4" />
          </MenuContentPageWrapper>
        </div>
      </div>
    </div>
  }
}
