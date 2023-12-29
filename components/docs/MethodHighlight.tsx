import { CSSProperties, ReactNode } from "react";

export const GET = "#25c2a0" as const;
export const POST = "#f48c06" as const;
export const PATCH = "#0077b6" as const;
export const PUT = "#00b4d8" as const;

type Props = {
	children: ReactNode;
	color: typeof GET | typeof POST;
	styles?: CSSProperties;
};

export const Highlight = ({ children, color, styles }: Props) => (
	<span
		style={{
			backgroundColor: color,
			borderRadius: "5px",
			color: "#fff",
			padding: "10px",
			...styles,
		}}
	>
		{children}
	</span>
);
