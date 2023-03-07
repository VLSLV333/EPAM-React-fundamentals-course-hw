import logo from '../../../../assets/logo.png';

import style from './Logo.module.css';

const Logo = () => {
	return <img className={style.img} src={logo} alt='EPAM courses logo' />;
};
export default Logo;
