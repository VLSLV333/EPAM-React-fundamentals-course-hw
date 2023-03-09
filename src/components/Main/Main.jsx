import { Link } from 'react-router-dom';

const Main = () => {
	return (
		<>
			<h1>Hello!</h1>
			<p>
				Unfortunatelly I did not see logic for starting page, so I've created
				this dummyPage:) But you still can go to pages which are main focus of
				this course using this links:
			</p>
			<Link>Register</Link>
			<Link to={'/courses'}>Courses</Link>
		</>
	);
};

export default Main;
