// ant-design-vue
import 'ant-design-vue/dist/antd.css';
import 'assets/style/ant-theme';
import { message, Tooltip, Modal, Button, Input, Dropdown, Menu } from 'ant-design-vue';

export const antInit = (app) => {
  app.use(Tooltip).use(Modal).use(Button).use(Input).use(Dropdown).use(Menu);

  app.provide('$modal', Modal);
  app.provide('$message', message);
};
