<template>
	<v-toolbar class="primary">
	  <v-toolbar-title v-text="title" class="white--text" @click="$router.push('/')"></v-toolbar-title>
	  <v-spacer></v-spacer>
	   <v-toolbar-items>
	     <v-btn flat class="white--text" @click="$router.push('/contact')">Contact</v-btn>
	   </v-toolbar-items>
	</v-toolbar>
</template>
<script>
	export default{
		data(){
			return{
				title:'Welcome'
			}
		}
	}
</script>