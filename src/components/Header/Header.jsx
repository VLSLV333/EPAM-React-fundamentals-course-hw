import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import { headerButtonText } from '../../constants';

import style from './Header.module.css';

import { useNavigate, useRouteLoaderData } from 'react-router-dom';

import { logOut } from '../../util/authentication';

const Header = () => {
	// const { token, userName } = useRouteLoaderData('root');
	const token = useRouteLoaderData('root');
	const navigate = useNavigate();
	const buttonHandler = () => {
		// console.log('here');
		logOut();
		navigate('/login');
	};
	return (
		<header className={style.header}>
			<Logo />
			{token && (
				<div className={style.user}>
					{/* <p>{userName}</p> */}
					<p>Julia</p>
					<Button buttonText={headerButtonText} onClick={buttonHandler} />
				</div>
			)}
		</header>
	);
};

export default Header;
