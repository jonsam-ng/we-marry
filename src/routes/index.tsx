import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "~/styles/home.less?inline";

const configs = {
	title: "你是我生命中的阳光和温暖，我爱你，一生一世不变。",
	subtitle: "往后余生，感谢有你",
	subDetails: [
		"你，让我相信爱情的美好。",
		"你，是我这一生的挚爱。",
		"你，让我心醉于爱情的海洋。",
	],
	links: [
		{
			text: "故事",
			url: "/stories",
		},
		{
			text: "图册",
			url: "https://album.wemarry.today",
			target: "_blank",
		},
	],
};

export default component$(() => {
	useStylesScoped$(styles);

	return (
		<div class="home-page">
			{/*  Pinner */}
			<div class="pinner">
				<h1 class="title">{configs.title}</h1>
				<div class="subtitle">
					<p class="leading">{configs.subtitle}</p>
					<ul>
						{configs.subDetails.map((detail) => (
							<li key={detail}>{detail}</li>
						))}
					</ul>
					<ul class="links custom">
						{configs.links.map(({ url, text, target }) => (
							<li key={url}>
								<a href={url} target={target ?? "_self"}>
									{text}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div class="bg"></div>
				<img class="flower" src="/assets/images/flower.svg" />
			</div>
		</div>
	);
});

export const head: DocumentHead = {
	title: "Lovely stories and albums to commemorate the wedding on WeMarry.",
};
