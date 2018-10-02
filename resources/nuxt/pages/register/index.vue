<template>
	<v-container fluid fill-height>
	  <v-layout align-center justify-center>
	    <v-flex xs12 sm10 md5>
	      <v-card class="elevation-12">
	        <v-toolbar dark color="primary">
	          <v-toolbar-title>Register</v-toolbar-title>
	        </v-toolbar>
	        <v-card-text>
	          <v-form ref="form" v-model="valid">
	            <v-text-field prepend-icon="person" v-model="form.name" :rules="rules.nameRules" name="name" label="Name" type="text"></v-text-field>
	            <v-text-field prepend-icon="email" v-model="form.email" :rules="rules.emailRules" name="email" label="Email" type="email"></v-text-field>
	            <v-text-field id="password" v-model="form.password" :rules="rules.passwordRules" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
	          </v-form>
	        </v-card-text>
	        <v-card-actions>
	          <v-btn color="primary" @click="register" :disabled="!valid" :loading="loading"><v-icon>fa-user</v-icon>&nbsp;Register</v-btn>
	          <v-btn color="red" class="white--text" @click="resetForm">Reset</v-btn>
	          <v-spacer></v-spacer>
	          Already registered ? &nbsp;
	          <v-btn color="info" @click="$router.push('/login')"><v-icon>fa-sign-in</v-icon>&nbsp;Login</v-btn>
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
	     titleTemplate: "Register @ Loyal Dashboard"
	   }
	},
	data(){
		return{
			loading:false,
			form:{
				name:'',
				email:'',
				password:''
			},
			rules:{
				nameRules:[
					v => !!v || 'Name is required',
					v => (v && v.length <= 20) || 'Name must be less than 20 characters',
					v => (v && v.length >= 3) || 'Name must be at least 3 characters',
				],
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
		resetForm(){
			this.$refs.form.reset();
		},
		register(){
			let formData = this.form;
			this.loading = true;
			this.$store.dispatch('register',formData).then((res)=>{
				this.loading = false;
				this.$router.push('/login');
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