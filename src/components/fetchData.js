export default async function fetchData(url){
	// TODO use auctionId
	try{
		const res = await fetch(url);
		if(!res.ok){
			throw new Error(res.status); // Error 400 500 
		}
		const res_data = await res.json();
		if(res_data.status == "success"){
			return ["success",res_data.data]; // success
		}
		else{
			throw new Error(res_data.message); // 200 status:error
		}
	} catch(error){
		return ["fail",{message : error.message}]
	}
}