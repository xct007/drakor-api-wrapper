import chai from "chai";
import {
	latest,
	search,
	getCategory,
	getChannel,
	detail,
} from "../src/index.js";
const expect = chai.expect;

describe("Drakor ID API", () => {
	describe("latest", () => {
		it("should return latest drakor", async () => {
			const data = await latest(10, 1);
			expect(data.error).to.be.false;
		});
	});
	describe("search", () => {
		it("should return search result", async () => {
			const data = await search("goblin");
			expect(data.error).to.be.false;
		});
	});
	describe("getCategory", () => {
		it("should return category", async () => {
			const data = await getCategory(625, { page: 1, count: 20 });
			expect(data.error).to.be.false;
		});
	});
	describe("getChannel", () => {
		it("should return channel", async () => {
			const data = await getChannel(14130, { page: 1, count: 20 });
			expect(data.error).to.be.false;
		});
	});
	describe("detail", () => {
		it("should return detail drakor", async () => {
			const data = await detail(14130);
			expect(data.error).to.be.false;
		});
	});
});
