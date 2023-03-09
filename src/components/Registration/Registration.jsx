import { Form, Link } from 'react-router-dom';

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

	const {
		value: nameInputValue,
		// isValid: nameIsValid,
		hasError: nameInputHasError,
		valueChangeHadler: nameInputChangeHadler,
		inputBlurHadler: nameInputBlurHadler,
		// reset: nameInputReset,
	} = useInput((value) => value.length > 1);

	const {
		value: emailInputValue,
		// isValid: emailIsValid,
		hasError: emailInputHasError,
		valueChangeHadler: emailInputChangeHadler,
		inputBlurHadler: emailInputBlurHadler,
		// reset: emailInputReset,
	} = useInput(validateEmail);

	const {
		value: passwordInputValue,
		// isValid: passwordIsValid,
		hasError: passwordInputHasError,
		valueChangeHadler: passwordInputChangeHadler,
		inputBlurHadler: passwordInputBlurHadler,
		// reset: passwordInputReset,
	} = useInput((value) => value.length > 6);

	return (
		<div className={style.grid}>
			<Form className={style.form}>
				<h2>Registration</h2>
				<Input
					forHtml={'name'}
					labelText={'Name'}
					placeholderText={'Enter name'}
					value={nameInputValue}
					onChange={nameInputChangeHadler}
					onBlur={nameInputBlurHadler}
					error={nameInputHasError}
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
				/>
				{passwordInputHasError && (
					<p className='errorMessage'>Please, enter at least 7 characters</p>
				)}
				<Button buttonText={'Registration'} />
				<p>
					If you have an account you can{' '}
					<Link className='errorMessage'>Login</Link>
				</p>
			</Form>
		</div>
	);
};

export default Registration;

export function test() {
	console.log('test');
}
