export default function pipeDuration(totalMinutes) {
	let hours = Math.floor(totalMinutes / 60);
	const minutes = totalMinutes % 60;
	if (hours < 10) {
		hours = '0' + hours;
	}

	let minuteOrMinutes = hours === '00' && minutes === 1 ? 'minute' : 'minutes';
	const stringAfterDuration = `${
		hours === '00' ? minuteOrMinutes : hours === '01' ? 'hour' : 'hours'
	}`;

	let prettyMinutes = minutes.toString().length === 1 ? '0' + minutes : minutes;

	return { hours, prettyMinutes, stringAfterDuration };
}
