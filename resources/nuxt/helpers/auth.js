export function getLocalUser(){
	const userStr = localStorage.getItem("user");
	if(!userStr){
		return null;
	}

	return JSON.parse(userStr);
}