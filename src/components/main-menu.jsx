import React from 'react';
import Menu from './menu';
import MenuItem from './menu-item';
import MenuViewContainer from './menu-view-container';

export default class MainMenu extends React.Component {
  /*
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
  */
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
          <MenuItem id="5">Component Five</MenuItem>
          <MenuItem id="6">Component Six</MenuItem>
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
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
              <p>test</p>
              <p>test</p>
              <p>test</p>
              <p>test</p>
              <p>test</p>
              <p>test</p>
              <p>test</p>
              <p>test</p>
              <p>test</p>
              <p>test</p>
              <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                <p>test</p>
                  <p>test</p>
                  <p>test</p>
                  <p>test</p>
                  <p>test</p>
                  <p>test</p>
                  <p>test</p>
                  <p>test</p>
                  <p>test</p>
                  <p>test</p>
                  <p>test</p>
                  <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
          <MenuViewContainer />
        </div>
      </div>
    </div>
  }
}
