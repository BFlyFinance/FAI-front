import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoon, faSun, faInfoCircle, faBell } from '@fortawesome/free-solid-svg-icons';

library.add([faMoon, faSun, faInfoCircle, faBell]);

export default {
  install(app) {
    app.component('v-icon', FontAwesomeIcon);
  },
};
