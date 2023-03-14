import { json, redirect } from 'react-router-dom';

import Registration from '../components/Registration/Registration';

const RegistrationPage = () => {
	return <Registration />;
};

export default RegistrationPage;

export async function action({ request }) {
	const dataFromForm = await request.formData();

	const submitedData = {
		name: dataFromForm.get('name'),
		email: dataFromForm.get('email'),
		password: dataFromForm.get('password'),
	};

	const response = await fetch('http://localhost:4000/register', {
		method: 'POST',
		body: JSON.stringify(submitedData),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (response.status === 400) {
		return response;
	}

	if (!response.ok) {
		throw json({ message: 'Could not register user.' }, { status: 500 });
	}

	return redirect('/login?message=User was created. Please login :)');
}
