"use client";

import { loadFact } from "@/actions/loadFact";
import { type FC, useState, useTransition } from "react";
import type { FactListProps } from ".";
import Button from "../Button";
import Fact from "../Fact/";

const FactList: FC<FactListProps> = ({ buttonLabel, locale }) => {
	const [pending, startTransition] = useTransition();
	const [fact, setFact] = useState<string>("");

	function handleClick() {
		startTransition(async () => {
			setFact(await loadFact());
		});
	}

	return (
		<section>
			<div className="flex flex-col gap-2">
				<Button isLoading={pending} onClick={handleClick}>
					{buttonLabel}
				</Button>
				<Fact value={fact} />
			</div>
		</section>
	);
};

export default FactList;
