import { redirect } from 'react-router-dom';

export function logOut() {
	localStorage.removeItem('token');
	localStorage.removeItem('userName');
	return redirect('/login?message=You are successfully logged out :)');
}
