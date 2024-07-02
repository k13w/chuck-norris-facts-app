import type { FC } from "react";
import type { TitleProps } from ".";

const Title: FC<TitleProps> = ({ children }) => {
	return <h1 className="text-2xl text-white font-bold my-4">{children}</h1>;
};

export default Title;
