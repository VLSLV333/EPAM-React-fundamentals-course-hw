import style from './Input.module.css';

const Input = ({
	placeholderText,
	onChange,
	forHtml,
	value,
	type = 'text',
	required = true,
	onBlur,
	labelText,
	error,
}) => {
	return (
		<div className={style.div}>
			{labelText && (
				<label className={error ? style.labError : style.lab} htmlFor={forHtml}>
					{labelText}
				</label>
			)}
			<input
				className={error ? style.inpError : style.inp}
				id={forHtml}
				onChange={onChange}
				placeholder={placeholderText}
				value={value}
				type={type}
				required={required}
				onBlur={onBlur}
			/>
		</div>
	);
};

export default Input;
