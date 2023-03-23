import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
// import { headerButtonText } from '../../constants';

import style from './Header.module.css';

// import { Form, useRouteLoaderData, useNavigate } from 'react-router-dom';

// import { useEffect } from 'react';

// let firstRender = true;

const Header = () => {
	// const { token, userName } = useRouteLoaderData('root');

	// const navigate = useNavigate();

	// useEffect(() => {
	// 	if (firstRender) {
	// 		function navigateToCourses() {
	// 			if (token && userName) {
	// 				navigate('/courses');
	// 			}
	// 		}
	// 		navigateToCourses();
	// 		firstRender = false;
	// 	}
	// }, [token, userName, navigate]);

	return (
		<header className={style.header}>
			<Logo />
			{/* {token && (
				<div className={style.user}>
					<p>{userName}</p>
					<Form method='post' action='/logout'>
						<Button buttonText={headerButtonText} />
					</Form>
				</div>
			)} */}
			<div className={style.user}>
				<p>Julia</p>
				<Button buttonText={'login'} />
			</div>
		</header>
	);
};

export default Header;
