import { component$ } from "@builder.io/qwik";

export default component$(() => {
	return (
		<div
			window:onLoad$={() => {
				//  see https://github.com/vfeskov/vanilla-back-to-top/blob/v7.2.1/OPTIONS.md
				import("vanilla-back-to-top").then((m) => {
					const { addBackToTop } = m.default;
					addBackToTop({
						diameter: 30,
						backgroundColor: "var(--primary-color)",
						textColor: "#fff",
						showWhenScrollTopIs: 100,
						zIndex: 999,
						scrollDuration: 300,
					});
				});
				import("ismobilejs").then((m) => {
					const isMobile = m.default;
					if (window) {
						// @ts-ignore
						window.isMobile = isMobile(window.navigator);
					}
				});
			}}
		></div>
	);
});
