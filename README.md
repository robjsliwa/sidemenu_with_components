# sidemenu_with_components

Simple starter project for webpage with sidemenu controlling what components
to show in main view.

To create side menu items use the following code:
```
<Menu>
	<MenuItem id="1">Component One</MenuItem>
	<MenuItem id="2">Component Two</MenuItem>
	<MenuItem id="3">Component Three</MenuItem>
	<MenuItem id="4">Component Four</MenuItem>
</Menu>
```

And to link these menus with content to display when the given menu item is selected
use this code.  id value should correspond to the menu item id value.
```
<MenuContentPageWrapper default="2">
	<PageOne id="1" />
	<PageTwo id="2" />
	<PageThree id="3" />
	<PageFour id="4" />
</MenuContentPageWrapper>
```

---

##How to use it##

Checkout this repo, install dependencies, then start the gulp process with the following:

```
	> git clone git@github.com:robjsliwa/sidemenu_with_components.git
	> cd sidemenu_with_components
	> npm install
	> gulp
```

If you do not have gupl installed:
```
npm install -g gulp
```
