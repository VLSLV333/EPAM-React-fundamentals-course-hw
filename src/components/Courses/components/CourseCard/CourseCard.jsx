import Button from '../../../../common/Button/Button';

import { mockedAuthorsList } from '../../../../constants';

import style from './CourseCard.module.css';

const CourseCard = ({ title, duration, creation, description, authors }) => {
	const toHoursAndMinutes = (totalMinutes) => {
		const hours = Math.floor(totalMinutes / 60);
		const minutes = totalMinutes % 60;
		return { hours, minutes };
	};

	const durationObject = toHoursAndMinutes(duration);

	const courseAuthorsArray = [];

	const creationFormated = creation.split('/').join('.');

	authors.forEach((id) =>
		mockedAuthorsList.forEach((auth) => {
			if (auth.id === id) {
				courseAuthorsArray.push(auth.name);
			}
		})
	);

	const courseAuthors = courseAuthorsArray.join(', ');

	return (
		<article className={style.article}>
			<div className={style.first}>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
			<div className={style.second}>
				{
					<p className={style.short}>
						<b>Athors:</b> {courseAuthors}
					</p>
				}
				<p>
					<b>Duration: </b>
					{`${durationObject.hours}:${durationObject.minutes} hours`}
				</p>
				<p>
					<b>Created:</b> {creationFormated}
				</p>
				<div className={style.btn}>
					<Button buttonText={'Show course'} />
				</div>
			</div>
		</article>
	);
};

export default CourseCard;
