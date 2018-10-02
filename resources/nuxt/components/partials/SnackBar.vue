<template>
	<v-snackbar
	  v-model="snackbar"
	  :bottom="y === 'bottom'"
	  :timeout="timeout"
	  :color="getAlert.status"
	>
	  {{ getAlert.msg }}
	  <v-btn
	    color="pink"
	    flat
	    @click="snackbar = false"
	  >
	    Close
	  </v-btn>
	</v-snackbar>
</template>
<script>
export default{
  data(){
	    return {
	        snackbar: false,
	        y: 'bottom',
	        color:'primary',
	        timeout: 6000,
	        text: ''
	    }
	},
	computed:{
		getAlert(){
			if(this.$store.getters.getMessage.msg){
				this.snackbar = true;
			}
			else
			{
				this.snackbar = false;
			}
			return this.$store.getters.getMessage;
		}
	}
}
</script>