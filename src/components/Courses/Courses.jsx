import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Button from '../../common/Button/Button';
import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';

import { mockedCoursesList } from '../../constants';
import { addNewCourseButtonText } from '../../constants';

import style from './Courses.module.css';

const Courses = () => {
	const navigate = useNavigate();

	const createCourseButtonHandler = () => {
		navigate('/courses/add');
	};

	const [courseList, setCourseList] = useState(mockedCoursesList);

	const searchHandler = (text) => {
		const filteredCourses = mockedCoursesList.filter((course) => {
			if (
				course.title.toLocaleLowerCase().includes(text) ||
				course.id.toLocaleLowerCase().includes(text)
			) {
				return course;
			} else {
				return undefined;
			}
		});
		setCourseList(filteredCourses);
	};

	return (
		<>
			<div className={style.topSection}>
				<SearchBar search={searchHandler} />
				<Button
					buttonText={addNewCourseButtonText}
					onClick={createCourseButtonHandler}
				/>
			</div>
			{courseList.map((course) => (
				<CourseCard
					title={course.title}
					duration={course.duration}
					creation={course.creationDate}
					description={course.description}
					authors={course.authors}
					key={course.id}
					id={course.id}
				/>
			))}
		</>
	);
};

export default Courses;
