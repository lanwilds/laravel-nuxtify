export default function (context) {
	context.store.dispatch('isImAlive').then((res)=>{

	},(error)=>{
		context.store.commit('toggleLoading',true)
		context.store.dispatch('refreshToken').then((success)=>{
			context.store.commit('toggleLoading',false)
			console.log(success)
		},(error)=>{
			context.store.commit('toggleLoading',false);
			context.store.commit('logout');
			context.redirect('/login');
			console.log(error)
		});
	});
	context.store.commit('toggleLoading',false)
	const currentUser = context.store.state.currentUser;
	const isLoggedIn = context.store.state.isLoggedIn;


	if(!currentUser && !isLoggedIn){
		context.store.commit("setAlert",{
			msg:"You need to login for accessing this content.",
			status:"primary"
		});
		context.redirect('/login');
	}
}