export * from "./bubbles";

export const daysFrom = (d1: any, d2: any) => {
	// @ts-ignore
	const dis = Math.abs(new Date(d2) - new Date(d1));
	return Math.floor(dis / (24 * 3600 * 1000));
};
