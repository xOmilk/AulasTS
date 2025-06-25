import { Link } from "react-router";

type LinkPatternProps = {
	href: string;
	children: React.ReactNode;
} & React.ComponentProps<"a">;

export function LinkRoute({ href, children, ...props }: LinkPatternProps) {
	return (
		<Link to={href} {...props}>
			{children}
		</Link>
	);
}
