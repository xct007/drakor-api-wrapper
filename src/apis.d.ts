import { DrakorID } from "./Types/index";

export interface DrakorID {
	latest(): Promise<DrakorID.Latest>;
	search(query: string): Promise<DrakorID.Search>;
	getCategory(category: string): Promise<DrakorID.Category>;
	getChannel(channel: string): Promise<DrakorID.Channel>;
	detail(id: string): Promise<DrakorID.Detail>;
}
