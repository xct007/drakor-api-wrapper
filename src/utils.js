/**
 * @fileoverview This file contains all the utilities for Drakor ID API
 * @module utils
 * @version 1.0.0
 * @since 1.0.0
 * @todo Add more documentation
 * @todo Add more utilities
 * @todo Add more examples
 * @todo Add more comments
 * @todo Add more types
 * @todo Add more tests
 * @todo Add more error handling
 */
import axios from "axios";

/**
 * @description Base URL for Drakor ID API, this is first baseURL.
 * @type {string}
 */
const BASE_URL = "https://wincamp.web.id";

/**
 * @description Base URL for Drakor ID API, this is alternative baseURL
 * @type {string}
 */
const BASE_URL_2 = "http://51.79.160.191";

/**
 * @description Base URL for Drakor ID API, this is first baseURL, using whatbox as source for video.
 * Headers is required when fetching the video source
 * @description Authorization header can be get from the source.
 * @type {Object<string, string>}
 */
const WHATBOX_HEADERS = {
	Authorization:
		"Basic ZHJha29ybmljb2phbnVhcjpESXZBTlRBcnRCSW5zVHJpU2tFcmVtZU50T01JQ0VyQ2VTTWlRVWFLYXJ5cHNCb2FyaQ==",
};

/**
 * @description API endpoint for Drakor ID API
 */
const API_ENDPOINT_LATEST =
	"/drakor/phalcon/api/get_category_ongoing_drakor/v1";

/**
 * @description API endpoint for Drakor ID API
 */
const API_ENDPOINT_SEARCH = "/drakor/phalcon/api/search_category_collection/v1";

/**
 * @description API endpoint for Drakor ID API
 */
const API_ENDPOINT_CATEGORY =
	"/drakor/phalcon/api/get_category_posts_drakor/v1";

/**
 * @description API endpoint for Drakor ID API
 */
const API_ENDPOINT_CHANNEL =
	"/drakor/phalcon/api/get_post_description_drakor/v1";

/**
 * @type {import("axios").AxiosInstance}
 * @description Axios instance for Drakor ID API
 * you can use this instance to make request to Drakor ID API,
 * also you can modify this instance to based on your needs
 */
const DrakorID = axios.create({
	baseURL: BASE_URL,
	headers: {
		"Data-Agent": "Drakor ID v1.4",
		"User-Agent": "okhttp/3.10.0",
	},
});

/**
 * @description Axios interceptor for Drakor ID API
 */
DrakorID.interceptors.response.use((response) => {
	if (response.data.status !== "ok") {
		return { error: true, data: response.data };
	}
	return { error: false, data: response.data };
});

/**
 * @description Axios interceptor for Drakor ID API
 */
DrakorID.interceptors.request.use((config) => {
	config.headers["Data-Agent"] = "Drakor ID v1.4";
	config.headers["User-Agent"] = "okhttp/3.10.0";
	return config;
});

export {
	DrakorID,
	BASE_URL,
	WHATBOX_HEADERS,
	BASE_URL_2,
	API_ENDPOINT_LATEST,
	API_ENDPOINT_SEARCH,
	API_ENDPOINT_CATEGORY,
	API_ENDPOINT_CHANNEL,
};
