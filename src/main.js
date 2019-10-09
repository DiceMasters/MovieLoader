import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

Vue.mixin({
	data() {
		return { api_key: 'e115de6ed19f36c0170d18679456e717' }
	}
})

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
