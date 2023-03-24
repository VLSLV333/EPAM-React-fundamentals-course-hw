import { redirect } from 'react-router-dom';

export function getAuthInfo() {
	const token = localStorage.getItem('token');
	const userName = localStorage.getItem('userName');
	return { token, userName };
}

export function tokenLoader() {
	return getAuthInfo();
}

export function checkIfAuthentificated() {
	const { token } = getAuthInfo();

	if (!token) {
		return redirect('/login?message=You need to log in :)');
	}

	return token;
}
