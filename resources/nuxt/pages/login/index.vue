<template>
	<v-container fluid fill-height>
	  <v-layout align-center justify-center>
	    <v-flex xs12 sm8 md4>
	      <v-card class="elevation-12">
	        <v-toolbar dark color="primary">
	          <v-toolbar-title>Login</v-toolbar-title>
	        </v-toolbar>
	        <v-card-text>
	        	<v-form ref="form" v-model="valid">
	        	  <v-text-field prepend-icon="email" v-model="form.email" :rules="rules.emailRules" name="email" label="Email" type="email"></v-text-field>
	        	  <v-text-field id="password" v-model="form.password" :rules="rules.passwordRules" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
	        	</v-form>
	        </v-card-text>
	        <v-card-actions>
	        	<v-btn color="primary" :disabled="!valid" :loading="loading" @click="login"><v-icon>fa-sign-in</v-icon> &nbsp;Login</v-btn>
	        	<v-spacer></v-spacer>
	        	 New user ?&nbsp;
	        	<v-btn color="info" @click="$router.push('/register')"><v-icon>fa-user</v-icon>&nbsp; Register</v-btn>
	        </v-card-actions>
	      </v-card>
	    </v-flex>
	  </v-layout>
	</v-container>
</template>

<script>
export default {
	layout: 'dash',
	middleware:'guest',
	head(){
	   return {
	     titleTemplate: "Login @ Loyal Dashboard"
	   }
	},
	data(){
		return{
			loading:false,
			form:{
				email:'',
				password:''
			},
			rules:{
				emailRules:[
					v => !!v || 'Email is required',
					v => /.+@.+/.test(v) || 'E-mail must be valid'
				],
				passwordRules:[
					v => !!v || 'Password is required',
					v => (v && v.length >= 6) || 'Password must be at least 6 characters'
				]
			},
			valid:false
		}
	},
	methods:{
		login(){
			let formData = this.form;
			this.loading = true;
			this.$store.dispatch('login',formData).then((res)=>{
				this.loading = false;
				this.$router.push('/dashboard');
			},(error)=>{
				this.loading = false;
			});
		}
	}
}
</script>
<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>