import type { FC } from "react";
import type { ButtonProps } from ".";

const Button: FC<ButtonProps> = ({
	children,
	isLoading,
	disabled,
	...props
}) => {
	return (
		<button
			{...props}
			disabled={isLoading || disabled}
			className="bg-blue-400 text-white p-2 rounded-lg disabled:bg-blue-300 disabled:cursor-default"
		>
			{children}
		</button>
	);
};

export default Button;
