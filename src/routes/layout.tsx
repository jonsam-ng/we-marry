import { component$, Slot } from "@builder.io/qwik";
import { Header, Footer, GlobalMixins } from "~/components";

export default component$(() => {
	return (
		<>
			<Header />
			<main>
				<Slot />
			</main>
			<Footer />
			<GlobalMixins />
		</>
	);
});
