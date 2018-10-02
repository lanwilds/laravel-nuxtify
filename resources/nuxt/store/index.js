import { getLocalUser } from '../helpers/auth';
import Vuex from 'vuex'
const user = getLocalUser();
import axios from 'axios';

/*
for API calls on Guarded routes use Authorization Header
Example:
axios.get('/some/route',{
	headers:{
		"Authorization":"Bearer "+context.state.currentUser.token
	}
})
.then((response)=>{
	console.log(response);
});
*/


const createStore = () => {
  return new Vuex.Store({
		state:{
			currentUser:user,
			isLoggedIn:!!user,
			loading:false,
			authErr:null,
			alert:{
				msg:'',
				status:'primary'
			}
		},
		getters:{
			isLoading(state){
				return state.loading;
			},
			isLoggedIn(state){
				return state.isLoggedIn;
			},
			currentUser(state){
				return state.currentUser;
			},
			authError(state){
				return state.authErr;
			},
			getMessage(state){
				return state.alert;
			}
		},
		mutations:{
			loginSuccess(state,payload){
				state.authErr = null;
				state.isLoggedIn = true;
				state.loading = false;
				state.alert.msg = "Howdy! You have been Logged in...";
				state.alert.status = "success";
				state.currentUser = Object.assign({},payload.user,{token:payload.access_token});

				localStorage.setItem("user",JSON.stringify(state.currentUser));
			},
			setUser(state){
				localStorage.setItem("user",JSON.stringify(state.currentUser));
			},
			loginFailed(state){
				state.loading = false;
				state.authErr = true;
				state.alert.msg = "Login failed, Please try again";
				state.alert.status = "error";
			},
			logout(state){
				state.alert.msg = "You have been Logged out...";
				state.alert.status = "primary";
				localStorage.removeItem("user");
				state.isLoggedIn = false;
				state.currentUser = null;
				state.loading = false;
			},
			toggleLoading(state,bool){
				state.loading = bool;
			},
			setAlert(state,payload){
				state.alert.msg = payload.msg;
				state.alert.status = payload.status;
				setTimeout(()=>{
					state.alert.msg=''
					state.alert.status=''
				},5000)
			},
			setAuthError(state,payload){
				state.authErr = payload;
			}
		},
		actions:{
			showAlert(context,payload){
				context.commit('setAlert',payload);
			},
			isImAlive(context){
				if(context.getters.isLoggedIn){
					return new Promise((resolve, reject) => {
						axios.post('/api/auth/me',{
							checkAuth:'checkAuth'
						},{
							headers:{
								"Authorization":"Bearer "+context.state.currentUser.token
							}
						}).then((res) => {
							resolve("authorised")
						},(error)=>{
							context.commit('logout');
							reject("unauthorized")
						});
					});
				}
			},
			postLogIn(context,payload){
				context.commit('toggleLoading',true);
				axios.post('/api/auth/signedin',{
					credentialsId:payload.user.id,
					credentialsType:payload.type
				}).then((response)=>{
					// console.log(response)
					context.commit('loginSuccess',response.data);
				},(error)=>{
					// console.log(error)
					context.commit('loginFailed',error);
				})

			},
			getSignOut(context){
				context.commit('toggleLoading',true);
				context.commit('logout');
			},
			login(context,payload){
				return new Promise((resolve, reject) => {
					axios.post('/api/auth/login',payload).then((response)=>{
						console.log(response)
						context.commit('loginSuccess',response.data)
						resolve('success')
					},(error)=>{
						context.commit('loginFailed')
						reject('failed')
					});
				});
			},
			register(context,payload){
				return new Promise((resolve, reject) => {
					axios.post('/api/auth/register',payload).then((response)=>{
						console.log(response)
						context.commit('setAlert',{
							msg:response.data.user.name+" Registered Success, Proceed for login",
							status:"success"
						})
						resolve('success')
					},(error)=>{
						context.commit('setAlert',{
							msg:"Registration failed",
							status:"error"
						})
						reject('failed')
					});
				});
			},
			postFormData(context,payload){
				context.commit('toggleUpLoading',true);
				var form = new FormData();
				form.append('title',payload.title);
				form.append('body',payload.body);
				for(let i=0; i<payload.images.length;i++){
					form.append('image'+i,payload.images[i]);
				}
				axios.post('/api/post/save',form,{
					onUploadProgress:(e) => {
						if(e.lengthComputable)
						{
							context.commit('updateProgress',e);
						}
					},
					headers:{
						"Authorization":"Bearer "+context.state.currentUser.token,
						'content-type': 'multipart/form-data'
					}
				}).then((res) => {
					context.commit('showAlert',"Data Stored success");
					context.dispatch('getItems',1);
					context.commit('dataStored',true);
					context.commit('toggleUpLoading',false);
					// console.log(res)

				},(error) => {
					context.commit('toggleUpLoading',false);
					
					context.commit('showAlert',"Failed to store data, Check inputs");
				});
			}
		}
	})
}
export default createStore;