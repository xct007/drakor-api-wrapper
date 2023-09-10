/**
 * @file Fetch data from Whatbox
 * @module fetcher
 * @version 1.0.0
 * @since 1.0.0
 * @author FrierenDv
 */
import axios from "axios";
import { WHATBOX_HEADERS } from "./utils.js";

/**
 * @type {import("axios").AxiosInstance}
 * @description Axios instance for Whatbox
 * you can use this instance to make request to Whatbox,
 * also you can modify this instance to based on your needs
 */
const whatbox = axios.create({
	headers: WHATBOX_HEADERS,
});

/**
 * @description Axios interceptor for Whatbox
 * @example
 * whatbox.interceptors.request.use((config) => {
 *     config.headers = WHATBOX_HEADERS;
 *     return config;
 * });
 */
whatbox.interceptors.request.use((config) => {
	config.headers = WHATBOX_HEADERS;
	return config;
});

/**
 * @description Fetch data from whatbox url
 * @param {string} url - whatbox url
 * @param {object<import("axios").AxiosRequestConfig>} opts - options
 * @returns {Promise<import("axios").AxiosResponse>}
 * @example
 * import fs from "fs";
 * const opts = { responseType: "stream" };
 * const data = await fetch("http://elara.whatbox.ca:15101/drakors/Kiss-Goblin/12.mp4", opts);
 * data.data.pipe(fs.createWriteStream("video.mp4"));
 */
export default async function fetcher(url, opts = {}) {
	return whatbox.get(url, {
		...opts,
	});
}