/**
 * @fileoverview DrakorID API Wrapper
 * @module DrakorID
 * @version 1.0.0
 * @since 1.0.0
 * @author FrierenDv
 */

import {
	DrakorID,
	API_ENDPOINT_LATEST,
	API_ENDPOINT_SEARCH,
	API_ENDPOINT_CATEGORY,
	API_ENDPOINT_CHANNEL,
} from "./utils.js";

/**
 * @description Get latest drakor
 * @param {number} limit
 * @param {number} page
 * @returns {Promise<import("./utils.js").DrakorIDResponse>}
 * @example
 * const data = await latest(10, 1);
 * console.log(data);
 */
export async function latest(limit = 10, page = 1) {
	const params = new URLSearchParams();
	params.append("page", page ? page : 1);
	params.append("count", limit ? limit : 10);
	params.append("isAPKvalid", true);
	const response = await DrakorID.post(API_ENDPOINT_LATEST, params);
	return response;
}

/**
 * @description Search drakor
 * @param {string} query
 * @returns {Promise<import("./utils.js").DrakorIDResponse>}
 * @example
 * const data = await search("goblin");
 * console.log(data);
 */
export async function search(query) {
	const params = new URLSearchParams();
	params.append("pilihan", "Serial Drama");
	params.append("search", query);
	params.append("page", 1);
	params.append("count", 20);
	params.append("isAPKvalid", true);
	const response = await DrakorID.post(API_ENDPOINT_SEARCH, params);
	return response;
}

/**
 * @description Get drakor category
 * @param {number|string} category_id - this from cid stand for category id
 * @param {object} opts - options
 * @param {number} opts.page - page number
 * @param {number} opts.count - count per page
 * @returns {Promise<import("./utils.js").DrakorIDResponse>}
 * @example
 * const data = await getCategory(625, { page: 1, count: 20 });
 * console.log(data);
 */
export async function getCategory(category_id, opts = {}) {
	const { page = 1, count = 20 } = opts;
	const params = new URLSearchParams();
	params.append("id", category_id);
	params.append("page", page);
	params.append("count", count);
	params.append("isAPKvalid", true);
	const response = await DrakorID.post(API_ENDPOINT_CATEGORY, params);
	return response;
}

/**
 * @description Get drakor channel
 * @param {number|string} channel_id - this from cid stand for channel id
 * @param {object} opts - options
 * @param {number} opts.page - page number
 * @param {number} opts.count - count per page
 * @returns {Promise<import("./utils.js").DrakorIDResponse>}
 * @example
 * const data = await getChannel(14130, { page: 1, count: 20 });
 * console.log(data);
 */
export async function getChannel(channel_id, opts = {}) {
	const { page = 1, count = 20 } = opts;
	const params = new URLSearchParams();
	params.append("channel_id", channel_id);
	params.append("page", page);
	params.append("count", count);
	params.append("isAPKvalid", true);
	const response = await DrakorID.post(API_ENDPOINT_CHANNEL, params);
	return response;
}

/**
 * @description Get drakor detail, alias of getCategory and getChannel
 * @param {number|string} id - this from cid stand for category id or channel id
 * @returns {Promise<import("./utils.js").DrakorIDResponse>}
 * @example
 * const data = await detail(14130);
 * console.log(data);
 */
export async function detail(id) {
	function arrayNotEmpty(arr) {
		return arr.length !== 0;
	}
	const cls = await getCategory(id).then((res) => {
		if (res.data.status === "ok" && arrayNotEmpty(res.data.category)) {
			return res;
		}
		return getChannel(id);
	});
	return cls;
}
