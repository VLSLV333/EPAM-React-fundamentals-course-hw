import style from './Button.module.css';

const Button = ({ onClick, buttonText, type }) => {
	return (
		<button onClick={onClick} className={style.but} type={type}>
			{buttonText}
		</button>
	);
};

export default Button;
