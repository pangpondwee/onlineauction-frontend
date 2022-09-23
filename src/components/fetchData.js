const API_SERVER = process.env.API_SERVER || "localhost:4000"

function set_header(){
	let headers = {
		'Content-Type': "application/json",
	}
	const token = localStorage.getItem("token");
	if (token){
		headers["Authorization"] = 'Bearer '+token
	}
	return headers
}

export const getData = async (url)=>{
	// TODO use auctionId
	return fetch(API_SERVER+url,{
		method: 'GET',
		headers:set_header()
	})
	.then((res)=>{
		return res.json();
	})
}

export const postData = async (url,data)=>{
	// TODO use auctionId
	return fetch(API_SERVER+url,{
		method: 'POST',
		mode: 'cors',
		credentials: 'include',
		headers: set_header(),
		body: data
	})
	.then((res)=>{
		return res.json();
	})
}
export default getData;
