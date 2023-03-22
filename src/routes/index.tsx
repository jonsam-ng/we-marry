import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { daysFrom, useBubbles } from "~/utils";
import { ScrollBar, Sharing } from "~/components";
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
	fromDay: "2023年1月26日",
	days: daysFrom("2023/1/26", new Date()),
	scrollContents: [
		"你是我的今天，以及所有的明天。",
		"我以为世界上最甜的是草莓酱，没想到是你。",
		"我要下载个百度地图，被你迷的都找不到北了。",
		"任何事一旦和你有关，那就和道理无关。",
		"这一生我只牵你的手，因为今生有你早已足够。",
		"我有一个很长很长很长的故事，需要用一生来告诉你。",
	],
};

export default component$(() => {
	useStylesScoped$(styles);
	const { circleDom } = useBubbles();

	return (
		<div class="home-page">
			{/*  Pinner */}
			<div class="pinner container">
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

			{/* Bubbles */}
			<div class="bubbles">
				<div class="left">
					<div class="left-inner" ref={circleDom}></div>
					<div class="details">
						<p class="heading">我们已经相爱了</p>
						<p class="days">
							{configs.days}
							<span class="day">天</span>
						</p>
						<p class="tail">从{configs.fromDay}开始</p>
					</div>
				</div>
				<div class="right"></div>
				<div class="bg"></div>
			</div>

			<ScrollBar contents={configs.scrollContents} />
			{/* Board */}
			<div class="board story container">
				<h1>我们的故事</h1>
				<p>
					年轻的时候会想要谈很多次恋爱，但是随着年龄的增长，终于领悟到爱一个人，就算用一辈子的时间，还是会嫌不够。慢慢地区了解这个人，体谅这个人，知道爱上为止，是需要有非常宽大的胸襟才行。
				</p>
				<p>
					爱情的美妙之处也许就在于不确定性，如果一开始就能预知结果，爱情也就失去了魅力。想爱时争取，相爱时珍惜，不爱时放手。不要因为一次不合适的爱而去纠结，而忘了怎么去继续爱下一个人。
				</p>
				<p>
					曾经有一份真诚的爱情摆在我的面前，但是我没有珍惜，等到了失去的时候才后悔莫及，尘世间最痛苦的事莫过于此。如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。如果非要在这份爱上加个期限，我希望是一万年！
				</p>
			</div>

			<Sharing />
		</div>
	);
});

export const head: DocumentHead = {
	title: "Lovely stories and albums to commemorate the wedding on WeMarry.",
};
