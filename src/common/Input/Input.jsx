import style from './Input.module.css';

const Input = ({
	placeholderText,
	onChange,
	forHtml,
	value,
	type = 'text',
	required = true,
	onBlur,
}) => {
	return (
		<>
			<input
				className={style.inp}
				id={forHtml}
				onChange={onChange}
				placeholder={placeholderText}
				value={value}
				type={type}
				required={required}
				onBlur={onBlur}
			/>
		</>
	);
};

export default Input;
