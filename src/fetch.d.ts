import { AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * @description Fetch data from whatbox url
 * @param {string} url - whatbox url
 * @param {Object<import("axios").AxiosRequestConfig>} opts - options
 * @returns {Promise<import("axios").AxiosResponse>}
 * @example
 * import fs from "fs";
 * const opts = { responseType: "stream" };
 * const data = await fetch("http://elara.whatbox.ca:15101/drakors/Kiss-Goblin/12.mp4", opts);
 * data.data.pipe(fs.createWriteStream("video.mp4"));
 */
export function fetcher(
	url: string,
	opts: AxiosRequestConfig
): Promise<AxiosResponse<any>>;
