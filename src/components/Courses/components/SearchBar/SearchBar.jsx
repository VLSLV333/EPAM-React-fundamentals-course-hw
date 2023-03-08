import { useState } from 'react';
import Button from '../../../../common/Button/Button';

import Input from '../../../../common/Input/Input';

import style from './SearchBar.module.css';

const SearchBar = ({ search }) => {
	const [searchInput, setSearchInput] = useState('');
	const [searchInputTouched, setSearchInputTouched] = useState(false);

	const searchInputHandler = (event) => {
		setSearchInputTouched(true);
		setSearchInput(event.target.value);

		if (searchInputTouched && event.target.value === '') {
			search(event.target.value);
		}
	};

	const searchButtonHandler = () => {
		search(searchInput.toLocaleLowerCase());
	};

	return (
		<div className={style.search}>
			<Input
				placeholderText='Enter course name or id...'
				onChange={searchInputHandler}
				required={false}
			/>
			<Button buttonText={'Search'} onClick={searchButtonHandler} />
		</div>
	);
};

export default SearchBar;
