import { redirect, json } from 'react-router-dom';

import Login from '../components/Login/Login';

const LoginPage = () => <Login />;

export default LoginPage;

const action = async ({ request }) => {
	try {
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

		if (response.status === 400) {
			return response;
		}

		if (!response.ok) {
			throw json({ message: 'Could not login user.' }, { status: 500 });
		}

		const responseData = await response.json();

		const token = responseData.result;
		const userName = responseData.user.name;

		localStorage.setItem('token', token);
		localStorage.setItem('userName', userName);

		return redirect('/courses');
	} catch (err) {
		throw json({ message: err.message }, { status: 501 });
	}
};

export { action };
