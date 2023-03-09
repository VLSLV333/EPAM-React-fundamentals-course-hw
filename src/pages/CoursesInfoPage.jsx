import { useParams } from 'react-router-dom';

import CoursesInfo from '../components/CourseInfo/CourseInfo';

const CoursesInfoPage = () => {
	const params = useParams();

	return <CoursesInfo dynamicId={params.courseId} />;
};

export default CoursesInfoPage;
