import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import useInput from '../../hooks/use-input';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import {
	mockedAuthorsList,
	mockedCoursesList,
	createCourseButtonText,
	createAuthorButtonText,
	addAuthorButtonText,
	removeAuthorButtonText,
} from '../../constants';
import pipeDuration from '../../helpers/pipeDuration';
import dateGenerator from '../../helpers/dateGenerator';
import removeDuplicates from '../../helpers/removeDuplicates';

import style from './CreateCourse.module.css';

const CreateCourse = () => {
	const navigate = useNavigate();

	const {
		value: descriptionValue,
		isValid: descriptionValid,
		hasError: descriptionHasError,
		valueChangeHadler: descriptionChangeHandler,
		inputBlurHadler: descriptionBlurHandler,
		reset: descriptionReset,
	} = useInput((value) => value.length > 1);

	const {
		value: titleValue,
		isValid: titleValid,
		hasError: titleHasError,
		valueChangeHadler: titleChangeHandler,
		inputBlurHadler: titleBlurHandler,
		reset: titleReset,
	} = useInput((value) => value.length > 0);

	const {
		value: durationValue,
		isValid: durationValid,
		hasError: durationHasError,
		valueChangeHadler: durationChangeHandler,
		inputBlurHadler: durationBlurHandler,
		reset: durationReset,
	} = useInput((value) => value > 0);

	const [authorNameInput, setAuthorNameInput] = useState('');
	const [authorNameTouched, setAuthorNameTouched] = useState(false);

	const authorNameInputHandler = (event) => {
		setAuthorNameInput(event.target.value);
	};

	const authorNameBlurHandler = () => {
		setAuthorNameTouched(true);
	};

	const [triedToSubmit, setTriedToSubmit] = useState(false);

	const [allAuthors, setAllAuthors] = useState(mockedAuthorsList);
	const [thisCourseAuthors, setThisCourseAthors] = useState([]);

	const addAuthorHandler = (auth) => {
		setAllAuthors((prevState) => {
			return [...prevState].filter((obj) => obj.id !== auth.id);
		});
		setThisCourseAthors((prevState) => {
			return [...prevState, auth];
		});
		setTriedToSubmit(false);
	};

	const removeAuthorHandler = (auth) => {
		setThisCourseAthors((prevState) => {
			return [...prevState].filter((obj) => obj.id !== auth.id);
		});
		setAllAuthors((prevState) => {
			return [...prevState, auth];
		});
	};

	const createAuthorHandler = () => {
		if (!authorNameValid) {
			setAuthorNameTouched(true);
			return;
		}

		mockedAuthorsList.push({ id: Math.random(), name: authorNameInput });
		const newAllAuthors = removeDuplicates(
			mockedAuthorsList,
			thisCourseAuthors
		);
		setAllAuthors(newAllAuthors);
		setAuthorNameInput('');
		setAuthorNameTouched(false);
	};

	let durationConvertedObject;

	if (+durationValue > 0) {
		durationConvertedObject = pipeDuration(+durationValue);
	}

	let formValid = false;

	if (descriptionValid && titleValid && durationValid) {
		formValid = true;
	}

	const formHandler = (event) => {
		event.preventDefault();

		if (thisCourseAuthors.length < 1) {
			alert('Please, fill in all fields');
			setTriedToSubmit(true);
			return;
		}

		if (!formValid) {
			alert('Please, fill in all fields');
			return;
		}

		mockedCoursesList.push({
			id: Math.random().toString(),
			title: titleValue,
			description: descriptionValue,
			creationDate: dateGenerator(),
			duration: +durationValue,
			authors: thisCourseAuthors.map((obj) => obj.id),
		});
		navigate('/courses');
		descriptionReset();
		titleReset();
		durationReset();
	};
	let authorNameValid = authorNameInput.length > 1;
	let authorNameHasError = !authorNameValid && authorNameTouched;

	const stringAfterDuration = durationConvertedObject
		? `${
				durationConvertedObject.hours === '00'
					? 'minutes'
					: durationConvertedObject.hours === '01'
					? 'hour'
					: 'hours'
		  }`
		: 'hours';
	let prettyMinutes = durationConvertedObject
		? durationConvertedObject.minutes.toString().length === 1
			? '0' + durationConvertedObject.minutes
			: durationConvertedObject.minutes
		: '';

	return (
		<form className={style.form} onSubmit={formHandler}>
			<div className={style.createCourse}>
				<Input
					labelText={'Title'}
					placeholderText={'Enter title...'}
					forHtml={'title'}
					value={titleValue}
					onChange={titleChangeHandler}
					onBlur={titleBlurHandler}
					error={titleHasError}
				/>
				<Button buttonText={createCourseButtonText} />
			</div>
			{titleHasError && (
				<p className='errorMessage'> Please, enter valid Title</p>
			)}
			<label className={style.descrTextArea} htmlFor='description'>
				Decsription
			</label>
			<textarea
				placeholder='Enter description'
				rows={'5'}
				id='description'
				required={true}
				value={descriptionValue}
				onChange={descriptionChangeHandler}
				className={descriptionHasError ? style.textAreaError : style.textArea}
				onBlur={descriptionBlurHandler}
			/>
			{descriptionHasError && (
				<p className='errorMessage'> Please, enter valid description</p>
			)}
			<fieldset className={style.fieldset}>
				<div className={style.allSections}>
					<div className={style.inputSections}>
						<section className={style.firstSection}>
							<h3>Add author</h3>
							<Input
								labelText={'Author name'}
								placeholderText={'Enter author name...'}
								forHtml={'author'}
								value={authorNameInput}
								onChange={authorNameInputHandler}
								onBlur={authorNameBlurHandler}
								required={false}
								error={authorNameHasError}
							/>
							{authorNameHasError && (
								<p className='errorMessage'>Please, enter valid author name</p>
							)}
							<Button
								buttonText={createAuthorButtonText}
								type='button'
								onClick={createAuthorHandler}
							/>
						</section>
						<section className={style.secondSection}>
							<h3>Duration</h3>
							<Input
								labelText={'Duration'}
								placeholderText={'Enter duration in minutes...'}
								forHtml={'duration'}
								type='number'
								onChange={durationChangeHandler}
								value={durationValue}
								onBlur={durationBlurHandler}
								error={durationHasError}
							/>
							{durationHasError && (
								<p className='errorMessage'>
									Please, enter valid duration (more than 0)
								</p>
							)}
						</section>
					</div>
					<div className={style.listSections}>
						<section className={style.addAuthor}>
							<h3>Authors</h3>
							<ul>
								{allAuthors.length === 0 && (
									<p>No authors left. Please, create new one.</p>
								)}
								{allAuthors.map((auth) => (
									<li key={auth.id}>
										<p>{auth.name}</p>
										<Button
											buttonText={addAuthorButtonText}
											type='button'
											onClick={() => addAuthorHandler(auth)}
										/>
									</li>
								))}
							</ul>
						</section>
						<section>
							<h3 className={triedToSubmit ? 'errorMessage' : ''}>
								Course authors
							</h3>
							<ul>
								{thisCourseAuthors.length === 0 && !triedToSubmit && (
									<p>Author list is empty.</p>
								)}
								{thisCourseAuthors.map((auth) => (
									<li key={auth.id}>
										<p>{auth.name}</p>
										<Button
											buttonText={removeAuthorButtonText}
											type='button'
											onClick={() => removeAuthorHandler(auth)}
										/>
									</li>
								))}
								{triedToSubmit && (
									<p className='errorMessage'>
										Please, select atleast one author.
									</p>
								)}
							</ul>
						</section>
					</div>
				</div>
				<p className={style.duration}>
					Duration:
					<b>
						{durationConvertedObject
							? ` ${durationConvertedObject.hours}:${prettyMinutes} `
							: ' 00:00 '}
					</b>
					{stringAfterDuration}
				</p>
			</fieldset>
		</form>
	);
};

export default CreateCourse;
