import { createApp } from 'vue';
import 'es6-promise';

import SvgPlugin from 'utils/Svg';

import App from './App.vue';
import router from './router';
import store from './store';
// https://vue-i18n.intlify.dev/guide/
import i18n from './i18n';

import 'normalize.css';
import 'assets/style/global';
import '@fontsource/kanit';

// Create App
const app = createApp(App);

import { antInit } from 'config/Init';

// Init Ant Design
antInit(app);

// EventBus
import mitt from 'mitt';
app.provide('emitter', mitt());

import { ENUMS } from 'config';
app.provide('ENUMS', ENUMS);

app.use(SvgPlugin).use(i18n).use(store).use(router).mount('#app');
