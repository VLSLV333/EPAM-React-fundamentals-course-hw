import { Link, useRouteError } from 'react-router-dom';

import style from './Error.module.css';

const Error = () => {
	let error = useRouteError();

	let message = 'Something went wrong!';
	let errorText = 'We will fix it in no time! Please, follow this link';

	if (error.status === 404) {
		message = 'This page doesn`t exist :( ';
		errorText = 'Get back in action! Please, follow this link';
	}

	if (error.status === 501) {
		message = error.data.message;
		errorText =
			'The backend is probably offline, please enable it. After that follow this link :)';
	}

	if (error.status === 500) {
		message = error.data.message;
		errorText =
			'Something went wrong, please try again by following this link :)';
	}

	return (
		<section className={style.grid}>
			<div className={style.center}>
				<h2>Unfortunately error happened</h2>
				<p>{message}</p>
				<p>{errorText}</p>
				<Link to={'/courses'}>Click me</Link>
			</div>
		</section>
	);
};

export default Error;
