<template>
	<div>
		<v-toolbar dark fixed color="blue">
		    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

		   <router-link to="/" style="text-decoration: none; font-family: 'Lobster', cursive !important;"><v-toolbar-title class="white--text">Loyal Dashboard</v-toolbar-title></router-link> 
		    <v-spacer></v-spacer>
		    <v-toolbar-items>
		    	<template v-if="!isLoggedIn">
		    		<v-menu bottom offset-y>
		    		   <v-btn slot="activator" flat @click="$router.push('/login')"><v-icon>fa-sign-in</v-icon>&nbsp; Sign In</v-btn>
		    		 </v-menu>
		    	</template>
		    	<template v-else> 
		    	    <v-menu 
			    	 transition="slide-x-transition"
			    	  bottom
			    	 >
			    	    <v-btn
			              slot="activator"
			              dark
			              icon
			            >
			              <v-icon>notifications_none</v-icon>
			            </v-btn>
			            <v-list>
			              <v-list-tile>no new notifications</v-list-tile>
			            </v-list>
			    	 </v-menu> 
		    		 <v-menu 
			    	 transition="slide-y-transition"
			    	  bottom
			    	   >
			    	  	<v-btn
			              slot="activator"
			              dark
			              icon
			            >
			              <v-icon>more_vert</v-icon>
			            </v-btn>
			            <v-list>
			              <v-list-tile
			                @click=""
			              >
			                <v-list-tile-title><v-icon>account_circle</v-icon> Profile</v-list-tile-title>
			              </v-list-tile>
			              <v-list-tile
			                @click="getSignOut"
			              >
			                <v-list-tile-title><v-icon>fa-sign-out</v-icon> Sign out</v-list-tile-title>
			              </v-list-tile>
			            </v-list>
			    	 </v-menu>
		    	</template>
		      </v-toolbar-items>
		</v-toolbar>
		<v-navigation-drawer
		      v-model="drawer"
		      fixed
		      temporary
		    >
		      <v-list class="pa-1">
		        <v-list-tile avatar>
		          <v-list-tile-avatar>
		           <v-icon>fa-user-secret</v-icon>
		          </v-list-tile-avatar>

		          <v-list-tile-content>
		            <v-list-tile-title style="font-family: 'Lobster', cursive !important;">Loyal Dashboard</v-list-tile-title>
		          </v-list-tile-content>
		        </v-list-tile>
		      </v-list>

		      <v-list class="pt-0" dense>
		        <v-divider></v-divider>

		        <v-list-tile
		          v-for="item in items"
		          :key="item.title"
		          @click="$router.push({path:item.link})"
		        >
		          <v-list-tile-action>
		            <v-icon>{{ item.icon }}</v-icon>
		          </v-list-tile-action>

		          <v-list-tile-content>
		            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
		          </v-list-tile-content>
		        </v-list-tile>
		      </v-list>
		    </v-navigation-drawer>
	</div>
</template>
<script>
	export default {
		name:'Navbar',
		data () {
		  return {
		    drawer: null,
		    items: [
		      { title: 'Home', icon: 'fa-home',link:'/' },
		      { title: 'About', icon: 'fa-users',link:'/about' },
		      { title: 'Privacy Policy', icon: 'security',link:'/privacy-policy' },
		      { title: 'Licence', icon: 'developer_board',link:'/licence' },
		      { title: 'Suggetion box', icon: 'inbox',link:'/suggetions' },
		    ]
		  }
		},
		computed:{
			isLoggedIn(){
				// console.log(this.$store.getters)
				return this.$store.getters.isLoggedIn;
			},
			user(){
				return;
				// return this.$store.getters.currentUser;
			}
		},
		methods:{
			LoginWithGithub(){
				window.open('/oauth/github','_self');
			},
			LoginWithFacebook(){
				window.open('/oauth/facebook','_self');
			},
			LoginWithInstagram(){
				window.open('/oauth/instagram','_self');
			},
			gotoGit(){
				window.open('http://www.github.com/lanwilds', '_blank');
			},
			getSignOut(){
				this.$store.dispatch('getSignOut').then(()=>{
					this.$router.push({path:'/login'});
				});
			},
			getProfile(){

			}
		}
	}
</script>