import { redirect } from 'react-router-dom';

import Login from '../components/Login/Login';

const LoginPage = () => {
	return <Login />;
};

export default LoginPage;

const action = async ({ request }) => {
	const dataFromForm = await request.formData();

	const loginData = {
		email: dataFromForm.get('email'),
		password: dataFromForm.get('password'),
	};

	const response = await fetch('http://localhost:4000/login', {
		method: 'POST',
		body: JSON.stringify(loginData),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const responseData = await response.json();

	const token = responseData.result;
	const userName = responseData.user.name;

	localStorage.setItem('token', token);
	localStorage.setItem('userName', userName);

	return redirect('/courses');
};

export { action };
