export default function (context) {
	const currentUser = context.store.state.currentUser;
	const isLoggedIn = context.store.state.isLoggedIn;

	context.store.commit('toggleLoading',false)

	if(currentUser && isLoggedIn){
		context.redirect('/dashboard');
	}
}