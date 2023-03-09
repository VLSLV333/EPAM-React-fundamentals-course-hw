import { Form, Link } from 'react-router-dom';

import { useState } from 'react';

import Input from '../../common/Input/Input';

import style from './Login.module.css';

import Button from '../../common/Button/Button';

const Login = () => {
	const [emailInput, setEmailInput] = useState('');

	const emailInputChangeHandler = (event) => {
		setEmailInput(event.target.value);
	};

	const [passwordInput, setPasswordInput] = useState('');

	const passwordInputChangeHandler = (event) => {
		setPasswordInput(event.target.value);
	};

	return (
		<div className={style.grid}>
			<Form className={style.form}>
				<h2>Login</h2>
				<Input
					forHtml={'email'}
					labelText={'Email'}
					placeholderText={'Enter email'}
					value={emailInput}
					onChange={emailInputChangeHandler}
				/>
				<Input
					forHtml={'password'}
					labelText={'Password'}
					placeholderText={'Enter password'}
					value={passwordInput}
					onChange={passwordInputChangeHandler}
				/>
				<Button buttonText={'Login'} />
				<p>
					If you dont have an account yet you can{' '}
					<Link className='errorMessage'>Register</Link>
				</p>
			</Form>
		</div>
	);
};

export default Login;
