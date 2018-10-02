<template>
		<v-app light>
			<DashToolbar/>
		   <v-content>
		   	<SnackBar/>
		   	<Loader/>
		   	<div class="mt-5">
		   		<nuxt/>
		   	</div>
		   </v-content>
		   <AppFooter/>
		 </v-app>
</template>
<script>
import AppFooter from '../components/AppFooter.vue';
import DashToolbar from '../components/DashToolbar.vue';
import SnackBar from '../components/partials/SnackBar.vue';
import Loader from '../components/partials/Loader.vue';

	export default{
		components:{
			DashToolbar,
			AppFooter,
			SnackBar,
			Loader
		}
	}
</script>