import BaseStore from './base-store';
import { SIDE_MENU_ITEM_SELECTED } from '../constants/sidemenu-constants';

class SideMenuStore extends BaseStore {
  constructor() {
    super();
    this.registerActions(() => this._actionsHandler.bind(this));
    this._selectedMenu = null;
  }

  _actionsHandler(action) {
    switch (action.actionType) {
      case SIDE_MENU_ITEM_SELECTED:
      this._selectedMenu = action.selectedMenu;
      this.emitChange();
      break;

      default:
      break;
    }
  }

  get selectedMenu() {
    return this._selectedMenu;
  }
}

export default new SideMenuStore();
