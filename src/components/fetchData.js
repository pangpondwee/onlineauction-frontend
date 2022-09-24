const API_SERVER = process.env.REACT_APP_API_SERVER || "localhost:4000"

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
	.then((result)=>{
		return result.json();
	})
	.then((res)=>{
		if(!res.status) throw new Error("Could not get status")
		if(res.status == "success") return res
		throw new Error(res.message)
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
	.then((res)=>{
		if(!res.status) throw new Error("Could not get status")
		if(res.status == "success") return res
		throw new Error(res.message)
	})
}
export default getData;
