import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import { headerButtonText } from '../../constants';

import style from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className={style.header}>
			<Logo />
			<div className={style.user}>
				<p>Julia</p>
				<Button buttonText={headerButtonText} />
				<Link to='/login'> Login</Link>
			</div>
		</header>
	);
};

export default Header;
