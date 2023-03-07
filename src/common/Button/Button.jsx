import style from './Button.module.css';

const Button = ({ onClick, buttonText }) => {
	return (
		<button onClick={onClick} className={style.but}>
			{buttonText}
		</button>
	);
};

export default Button;
