import { useNavigate } from 'react-router-dom';

import { courseCardButtonText } from '../../../../constants';

import Button from '../../../../common/Button/Button';
import pipeDuration from '../../../../helpers/pipeDuration';
import creationDateFormater from '../../../../helpers/creationDateFormater';
import getAuthorsNamesArray from '../../../../helpers/getAuthorsNamesArray';

import style from './CourseCard.module.css';

const CourseCard = ({
	title,
	duration,
	creation,
	description,
	authors,
	id,
}) => {
	const durationObject = pipeDuration(duration);

	const creationFormated = creationDateFormater(creation);

	const courseAuthors = getAuthorsNamesArray(authors).join(', ');

	const navigate = useNavigate();

	const showCourseHandler = () => {
		navigate(`${id}`);
	};

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
					<Button
						buttonText={courseCardButtonText}
						onClick={showCourseHandler}
					/>
				</div>
			</div>
		</article>
	);
};

export default CourseCard;
