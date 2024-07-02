import type { FC } from "react";
import type { ContainerProps } from ".";

const Container: FC<ContainerProps> = ({ children }) => {
	return (
		<section className="md:max-w-[70%] px-8 md:px-2 mx-auto mt-12">
			{children}
		</section>
	);
};

export default Container;
