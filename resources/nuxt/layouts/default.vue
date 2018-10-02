<template>
	<v-app light>
		<AppToolbar/>
	   <v-content>
     		<nuxt/>
	   </v-content>
	   <AppFooter/>
	 </v-app>
</template>
<script>
import AppToolbar from '../components/AppToolbar.vue';
import AppFooter from '../components/AppFooter.vue';
	export default{
		components:{
			AppToolbar,
			AppFooter
		}
	}
</script>