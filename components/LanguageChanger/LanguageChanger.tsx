import Link from "next/link";
import type { FC } from "react";
import type { LanguageChangerProps } from ".";

const LanguageChanger: FC<LanguageChangerProps> = ({ locale }) => {
	return (
		<div className="flex gap-2">
			{locale === "pt-BR" ? (
				<Link href="/en-US" className="text-2xl">
					🇺🇸
				</Link>
			) : (
				<Link href="/pt-BR" className="text-2xl">
					🇧🇷
				</Link>
			)}
		</div>
	);
};

export default LanguageChanger;
