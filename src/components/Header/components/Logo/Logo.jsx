import { Link } from 'react-router-dom';

import logo from '../../../../assets/logo.png';

import style from './Logo.module.css';

const Logo = () => {
	return (
		<Link to={'/courses'}>
			<img className={style.img} src={logo} alt='EPAM courses logo' />
		</Link>
	);
};
export default Logo;
