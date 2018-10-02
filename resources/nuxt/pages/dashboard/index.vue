<template>
	<v-container>
		<v-layout>
			<v-flex>
				<v-card class="elevation-12">
				  <v-toolbar dark color="info">
				    <v-toolbar-title><v-icon>fa-dashboard</v-icon> Dashboard</v-toolbar-title>
				  </v-toolbar>
				  <v-card-text>
				  	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				  	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				  	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				  	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				  	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				  	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				  </v-card-text>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	layout: 'dash',
	middleware:'auth',
	head(){
	   return {
	     titleTemplate: "Dashboard @ Loyal Dashboard"
	   }
	},
}
</script>