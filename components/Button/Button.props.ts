import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

export type ButtonProps = { isLoading?: boolean } & PropsWithChildren<
	ButtonHTMLAttributes<HTMLButtonElement>
>;
