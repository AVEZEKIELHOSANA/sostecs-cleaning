import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHome, faInfoCircle, faBroom, faCalendarCheck, faEnvelope, faTimes  } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
// Add icons to the library
library.add(faHome, faInfoCircle, faBroom, faCalendarCheck, faEnvelope, faTimes, faFacebookF, faInstagram, faTwitter, faWhatsapp )

const app = createApp(App)

// Register globally
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
