export function prepend(num){
	return ('0'+num).slice(-2)
}
export function getDate(timeRemaining){
	// TODO make date lighter
	const d = new Date(timeRemaining);
	const d_days = Math.floor(timeRemaining/(24*60*60*1000)); // days remaining
	const d_hour = d.getUTCHours();
	const d_minute = prepend(d.getMinutes());
	const d_seconds = prepend(d.getSeconds());
	if(timeRemaining <= 0){
		return "Ended";
	}
	if(d_days >= 1){
		return `${d_days} Days`;
	}
	if(d_hour >= 1){
		return `${d_hour} Hours`;
	}
	else{
		return `00:${d_minute}:${d_seconds}`;
	}
}

export function getDateSince(date_ms){
	// TODO make date lighter
	const d = new Date(date_ms);
	const d_days = Math.floor(date_ms/(24*60*60*1000)); // days remaining
	const d_hour = d.getUTCHours();
	const d_minute = d.getMinutes();
	const d_seconds = d.getSeconds();
	if(date_ms <= 0){
		return "Right Now";
	}
	if(d_days >= 1){
		return `${d_days} days ago`;
	}
	if(d_hour >= 1){
		return `${d_hour} hours ago`;
	}
	if(d_minute >= 1){
		return `${d_minute} minutes ago`
	}
	else{
		return `${d_seconds} seconds ago`;
	}
}