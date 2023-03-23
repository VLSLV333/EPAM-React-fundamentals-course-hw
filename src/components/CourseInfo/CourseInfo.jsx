import { NavLink } from 'react-router-dom';

import { mockedCoursesList } from '../../constants';
import pipeDuration from '../../helpers/pipeDuration';
import getAuthorsNamesArray from '../../helpers/getAuthorsNamesArray';
import creationDateFormater from '../../helpers/creationDateFormater';

import style from './CoursesInfo.module.css';

const CoursesInfo = ({ dynamicId }) => {
	const { title, description, id, duration, creationDate, authors } =
		mockedCoursesList.filter((cour) => cour.id === dynamicId)[0];

	const { hours, prettyMinutes, stringAfterDuration } = pipeDuration(duration);
	const creationFormated = creationDateFormater(creationDate);
	const authorsArray = getAuthorsNamesArray(authors);

	return (
		<>
			<NavLink className={style.a} to={'/courses'}>
				⇐ Back to courses
			</NavLink>
			<section className={style.section}>
				<h2>{title}</h2>
				<div className={style.allInfo}>
					<p className={style.first}>{description}</p>
					<div className={style.second}>
						<p>
							<b>ID: </b>
							{id}
						</p>
						<p>
							<b>Duration: </b>
							{`${hours}:${prettyMinutes} ${stringAfterDuration}`}
						</p>
						<p>
							<b>Created: </b>
							{creationFormated}
						</p>
						<p>
							<b>Authors:</b>
						</p>
						{authorsArray.map((name) => (
							<p key={name}>{name}</p>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default CoursesInfo;

// id = 'the dynamic id provided from link. Need to make correspond to Id of courses'
