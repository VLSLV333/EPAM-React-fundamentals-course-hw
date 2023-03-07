import CourseCard from './components/CourseCard/CourseCard';

import { mockedCoursesList } from '../../constants';

const Courses = () => {
	return mockedCoursesList.map((course) => (
		<CourseCard
			title={course.title}
			duration={course.duration}
			creation={course.creationDate}
			description={course.description}
			authors={course.authors}
			key={course.id}
		/>
	));
};

export default Courses;
