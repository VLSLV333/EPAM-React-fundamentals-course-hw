import { Form, NavLink, useLocation } from 'react-router-dom';

import { useState } from 'react';

import Input from '../../common/Input/Input';

import style from './Login.module.css';

import Button from '../../common/Button/Button';

const Login = () => {
	const actionData = useLocation();
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
			<Form className={style.form} method='post'>
				{actionData.state?._isRedirect && (
					<p className='successMessage'>
						User successfully created. Please login :)
					</p>
				)}
				<h2>Login</h2>
				<Input
					forHtml={'email'}
					labelText={'Email'}
					placeholderText={'Enter email'}
					value={emailInput}
					onChange={emailInputChangeHandler}
					name={'email'}
				/>
				<Input
					forHtml={'password'}
					labelText={'Password'}
					placeholderText={'Enter password'}
					value={passwordInput}
					onChange={passwordInputChangeHandler}
					name={'password'}
				/>
				<Button buttonText={'Login'} />
				<p>
					If you dont have an account yet you can{' '}
					<NavLink className={style.nav} to={'/registration'}>
						Register
					</NavLink>
				</p>
			</Form>
		</div>
	);
};

export default Login;
