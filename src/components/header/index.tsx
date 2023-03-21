import { component$, useStyles$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { Button } from "../index";
import { IconHeart } from "../icons";
import configs from "./configs";
import styles from "./index.less?inline";

const { actions } = configs;

export default component$(() => {
	useStyles$(styles);

	const { url } = useLocation();

	return (
		<header>
			<a class="logo" href="/">
				<img src="/logo.png" />
			</a>
			<nav>
				<div>
					<a
						href="/stories"
						class={{ active: url.pathname.startsWith("/stories") }}
					>
						故事
					</a>
					<a href="https://album.wemarry.today" target="_blank">
						图册
					</a>
					<a
						href="/about"
						class={{ active: url.pathname.startsWith("/about") }}
					>
						关于
					</a>
				</div>
				<div class="actions">
					{actions.map(({ text, icon, url }) => (
						<a title={text} target="_blank" class="action" href={url}>
							{icon}
						</a>
					))}
					{/* @ts-ignore */}
					<Button className="blessing">{IconHeart}祝福我们</Button>
				</div>
			</nav>
		</header>
	);
});
