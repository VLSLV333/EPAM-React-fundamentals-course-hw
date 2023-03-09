import { mockedAuthorsList } from '../constants';

export default function getAuthorsNamesArray(authorsArray) {
	const courseAuthorsArray = [];

	authorsArray.forEach((id) =>
		mockedAuthorsList.forEach((auth) => {
			if (auth.id === id) {
				courseAuthorsArray.push(auth.name);
			}
		})
	);

	return courseAuthorsArray;
}
