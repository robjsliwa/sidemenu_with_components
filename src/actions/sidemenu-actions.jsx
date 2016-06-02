import AppDispatcher from '../dispatcher/app-dispatcher';
import { SIDE_MENU_ITEM_SELECTED } from '../constants/sidemenu-constants';

class SideMenuActions {
  selectMenu(id) {
    AppDispatcher.dispatch({
      actionType: SIDE_MENU_ITEM_SELECTED,
      selectedMenu: id,
    });
  }
}

export default new SideMenuActions();
