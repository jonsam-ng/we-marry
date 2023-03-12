import { component$, useStyles$, Slot } from "@builder.io/qwik";
import styles from "./index.less?inline";

export default component$(
	({
		type = "primary",
		className = "",
	}: {
		type: "primary";
		className: string;
	}) => {
		useStyles$(styles);

		return (
			<button class={{ button: true, [type]: true, [className]: true }}>
				<Slot />
			</button>
		);
	}
);
