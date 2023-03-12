import { Form, NavLink, useActionData } from 'react-router-dom';

import Input from '../../common/Input/Input';

import style from './Registration.module.css';

import useInput from '../../hooks/use-input';
import Button from '../../common/Button/Button';

const Registration = () => {
	const validateEmail = (email) => {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};

	const actionData = useActionData();

	const {
		value: nameInputValue,
		hasError: nameInputHasError,
		isValid: nameInputValid,
		valueChangeHadler: nameInputChangeHadler,
		inputBlurHadler: nameInputBlurHadler,
	} = useInput((value) => value.length > 1);

	const {
		value: emailInputValue,
		hasError: emailInputHasError,
		isValid: emailInputValid,
		valueChangeHadler: emailInputChangeHadler,
		inputBlurHadler: emailInputBlurHadler,
	} = useInput(validateEmail);

	const {
		value: passwordInputValue,
		hasError: passwordInputHasError,
		isValid: passwordInputValid,
		valueChangeHadler: passwordInputChangeHadler,
		inputBlurHadler: passwordInputBlurHadler,
	} = useInput((value) => value.length > 6);

	const formNotValid =
		!passwordInputValid || !emailInputValid || !nameInputValid;

	return (
		<div className={style.grid}>
			<Form method='post' className={style.form}>
				{actionData && !actionData.successful && (
					<ul>
						{actionData.errors.map((err) => (
							<li key={err} className='errorMessage'>
								{err}
							</li>
						))}
					</ul>
				)}
				<h2>Registration</h2>
				<Input
					forHtml={'name'}
					labelText={'Name'}
					placeholderText={'Enter name'}
					value={nameInputValue}
					onChange={nameInputChangeHadler}
					onBlur={nameInputBlurHadler}
					error={nameInputHasError}
					name='name'
				/>
				{nameInputHasError && (
					<p className='errorMessage'>Please, enter valid name</p>
				)}
				<Input
					forHtml={'email'}
					labelText={'Email'}
					placeholderText={'Enter email'}
					value={emailInputValue}
					onChange={emailInputChangeHadler}
					onBlur={emailInputBlurHadler}
					error={emailInputHasError}
					type={'email'}
					name='email'
				/>
				{emailInputHasError && (
					<p className='errorMessage'>Please, enter valid email</p>
				)}
				<Input
					forHtml={'password'}
					labelText={'Password'}
					placeholderText={'Enter password'}
					value={passwordInputValue}
					onChange={passwordInputChangeHadler}
					onBlur={passwordInputBlurHadler}
					error={passwordInputHasError}
					name='password'
				/>
				{passwordInputHasError && (
					<p className='errorMessage'>Please, enter at least 7 characters</p>
				)}
				<Button buttonText={'Registration'} disabled={formNotValid} />
				<p>
					If you have an account you can{' '}
					<NavLink className={style.nav} to='/login'>
						Login
					</NavLink>
				</p>
			</Form>
		</div>
	);
};

export default Registration;
