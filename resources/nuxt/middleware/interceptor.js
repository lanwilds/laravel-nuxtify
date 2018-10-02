import axios from 'axios';
export default function (context) {
	axios.interceptors.response.use(null,(error)=>{
		if(error.response.status == 401){
			store.commit('logout');
			store.dispatch("showAlert",{
				msg:"Session Expaired",
				status:"primary"
			});
			router.push('/');
		}
		if(error.response.status == 404){
			store.dispatch("showAlert",{
				msg:"Page not found",
				status:"error"
			});
			router.push('/');
		}
		return Promise.reject(error);
	});
}