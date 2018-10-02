import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'font-awesome/css/font-awesome.min.css' // Ensure you are using css-loade
import colors from 'vuetify/es5/util/colors'

import Vue from 'vue'
import Vuetify from 'vuetify'
import VueParticles from 'vue-particles'

Vue.use(VueParticles)

Vue.use(Vuetify,{	
	theme: {
	  primary: '#006BB7',
	  secondary: '#b0bec5',
	  info: '#8c9eff',
	  error: '#b71c1c',
	  purple:'#007290',
	  success:colors.green.darken2
	}
});