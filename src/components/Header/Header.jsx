import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import { headerButtonText } from '../../constants';

import style from './Header.module.css';

const Header = () => {
	return (
		<header className={style.header}>
			<Logo />
			<div className={style.user}>
				<p>Julia</p>
				<Button buttonText={headerButtonText} />
			</div>
		</header>
	);
};

export default Header;
