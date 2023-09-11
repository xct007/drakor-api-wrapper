export namespace DrakorID {
	export interface Options {
		page: number;
		count: number;
	}
	export interface Responses {
		error: boolean;
		data: object[] | null;
	}
}
