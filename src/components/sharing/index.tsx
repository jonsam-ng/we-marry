import {
	component$,
	type JSXChildren,
	useStylesScoped$,
} from "@builder.io/qwik";
import { IconWechat, IconQQ, IconQQZone, IconWeibo } from "~/components/icons";
import styles from "./index.less?inline";

type MediaType = "wechat" | "qq" | "weibo" | "qzone";

interface MediaConf {
	key: MediaType;
	text: String;
	icon: any;
	params: Record<any, any>;
}

const mediaSet: Record<MediaType, MediaConf> = {
	wechat: {
		key: "wechat",
		text: "微信",
		icon: IconWechat,
		params: {},
	},
	qq: {
		key: "qq",
		text: "QQ",
		icon: IconQQ,
		params: {},
	},
	qzone: {
		key: "qzone",
		text: "QQ空间",
		icon: IconQQZone,
		params: {},
	},
	weibo: {
		key: "weibo",
		text: "微博",
		icon: IconWeibo,
		params: {},
	},
};

export default component$(
	({ types = ["wechat", "qq", "qzone", "weibo"] }: { types?: MediaType[] }) => {
		useStylesScoped$(styles);

		return (
			<ul class="sharing custom">
				{types
					.map((type) => mediaSet[type])
					.map(({ text, key, icon }) => (
						<li key={key} class="item" title={`扫描二维码分享到${text}`}>
							<div class="icon">{icon}</div>
							<span>{text as JSXChildren}</span>
						</li>
					))}
			</ul>
		);
	}
);
