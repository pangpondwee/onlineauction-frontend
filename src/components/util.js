export function getDate(timeRemaining){
	// TODO make date lighter
	const d = new Date(timeRemaining);
	const d_days = Math.floor(timeRemaining/(24*60*60*1000)); // days remaining
	const d_hour = d.getUTCHours();
	const d_minute = d.getUTCMinutes();
	const d_seconds = d.getUTCSeconds();
	if(timeRemaining <= 0){
		return "Ended";
	}
	if(d_days > 2){
		return `${d_days} day(s)`;
	}
	else{
		return `${d_hour}hr ${d_minute}m ${d_seconds}s`;
	}
}