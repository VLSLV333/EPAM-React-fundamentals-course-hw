import style from './App.module.css';

import { useState } from 'react';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';

function App() {
	const [showCourses, setShowCourses] = useState(true);

	const switchHandler = () => {
		setShowCourses((prevState) => !prevState);
	};

	return (
		<>
			<Header />
			<main className={style.main}>
				{showCourses && <Courses swap={switchHandler} />}
				{!showCourses && <CreateCourse swap={switchHandler} />}
			</main>
		</>
	);
}

export default App;
