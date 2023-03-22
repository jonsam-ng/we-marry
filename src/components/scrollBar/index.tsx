import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./index.less?inline";

export default component$(
	({
		contents = [],
		backgroundColor = "rgba(54,16,65,.6)",
	}: {
		contents?: string[];
		backgroundColor?: string;
	}) => {
		useStyles$(styles);

		return (
			<div class="scrollbar" style={{ backgroundColor }}>
				<div class="inner">
					{contents.map((content) => (
						<span>{content}</span>
					))}
				</div>
			</div>
		);
	}
);
