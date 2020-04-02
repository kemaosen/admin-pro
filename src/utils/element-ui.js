import Vue from "vue";
import {
    Button, Select, Container, Header, Footer, Main, Aside, Dropdown, DropdownMenu, DropdownItem, Menu, Submenu, MenuItem, MenuItemGroup, Scrollbar,
    Input, Breadcrumb, BreadcrumbItem, Table, TableColumn, Row, Col, Message
} from "element-ui";
Vue.use(Button);
Vue.use(Select);
Vue.use(Container);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Scrollbar);
Vue.use(Input);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Row);
Vue.use(Col);
Vue.prototype.$message = Message;
