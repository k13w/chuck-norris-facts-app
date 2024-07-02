import type { FC } from "react";
import type { FactProps } from ".";

const Fact: FC<FactProps> = ({ value }) => {
	if (!value) return null;

	return (
		<div data-cy="fact" className="bg-blue-200 p-4 rounded-lg text-center">
			<p className="text-blue-800">{value}</p>
		</div>
	);
};

export default Fact;
