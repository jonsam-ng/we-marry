import { component$, Slot } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
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

export const head: DocumentHead = ({ head }: any) => {
	return {
		title: `${head.title} | WeMarry`,
	};
};
