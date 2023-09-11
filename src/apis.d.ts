import { DrakorID } from "./Types/index";

/**
 * @description Get latest drakor
 * @param {number} limit
 * @param {number} page
 * @returns {Promise<import("./utils.js").DrakorIDResponse>}
 * @example
 * const data = await latest(10, 1);
 * console.log(data);
 */
export function latest(
	limit?: number,
	page?: number
): Promise<DrakorID.Responses>;

/**
 * @description Search drakor
 * @param {string} query
 * @returns {Promise<import("./utils.js").DrakorIDResponse>}
 * @example
 * const data = await search("goblin");
 * console.log(data);
 */
export function search(query: string): Promise<DrakorID.Responses>;

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
export function getCategory(
	category_id: number | string,
	opts?: DrakorID.Options
): Promise<DrakorID.Responses>;

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
export function getChannel(
	channel_id: number | string,
	opts?: DrakorID.Options
): Promise<DrakorID.Responses>;

/**
 * @description Get drakor detail, alias of getCategory and getChannel
 * @param {number|string} id - this from cid stand for category id or channel id
 * @returns {Promise<import("./utils.js").DrakorIDResponse>}
 * @example
 * const data = await detail(14130);
 * console.log(data);
 */
export function detail(id: number | string): Promise<DrakorID.Responses>;
