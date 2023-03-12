export function getAuthInfo() {
	const token = localStorage.getItem('token');
	// const userName = localStorage.getItem('userName');
	// return { token, userName };
	return token;
}

export function tokenLoader() {
	return getAuthInfo();
}

export function logOut() {
	localStorage.removeItem('token');
	localStorage.removeItem('userName');
}
