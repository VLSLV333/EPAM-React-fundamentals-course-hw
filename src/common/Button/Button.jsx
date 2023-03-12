import style from './Button.module.css';

const Button = ({ onClick, buttonText, type, disabled }) => {
	return (
		<button
			onClick={onClick}
			className={style.but}
			type={type}
			disabled={disabled}
		>
			{buttonText}
		</button>
	);
};

export default Button;
