export const fetchData = async (url)=>{
	// TODO use auctionId
	return fetch(url)
	.then((res)=>{
		// if(!res.ok){
		// 	throw new Error(res.status); // Error 400 500
		// }
		// else{
			return res.json();
		// }
	})
	.then(res_data=>{
		if(res_data.status == "success"){
			return ["success",res_data.data];
		}
		else{
			throw new Error(res_data.message);
		}
	})
	.catch(error=>{
		return ["fail",{message : error.message}]
	})
}

export const postData = async (url,data)=>{
	// TODO use auctionId
	return fetch(url,{
		method: 'POST',
		mode: 'cors',
		credentials: 'include',
		headers: {
			'Content-Type': "application/json"
		},
		body: data
	})
	.then((res)=>{
		// if(!res.ok){
		// 	throw new Error(res.status); // Error 400 500
		// }
		// else{
			return res.json();
		// }
	})
	.then(res_data=>{
		if(res_data.status == "success"){
			return ["success",res_data.data];
		}
		else{
			throw new Error(res_data.message);
		}
	})
	.catch(error=>{
		return ["fail",{message : error.message}]
	})
}
export default fetchData;