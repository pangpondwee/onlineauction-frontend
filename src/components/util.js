function prepend(num){
	return ('0'+num).slice(-2)
}
export function getDate(timeRemaining){
	// TODO make date lighter
	const d = new Date(timeRemaining);
	const d_days = Math.floor(timeRemaining/(24*60*60*1000)); // days remaining
	const d_hour = d.getUTCHours();
	const d_minute = prepend(d.getUTCMinutes());
	const d_seconds = prepend(d.getUTCSeconds());
	if(timeRemaining <= 0){
		return "Ended";
	}
	if(d_days > 1){
		return `${d_days} Days`;
	}
	if(d_hour > 1){
		return `${d_hour} Hours`;
	}
	else{
		return `00:${d_minute}:${d_seconds}`;
	}
}