interface ResponseAPI {
	error: boolean;
	data: object[] | null;
}
export namespace DrakorID {
	export type Latest = ResponseAPI;
	export type Search = ResponseAPI;
	export type Category = ResponseAPI;
	export type Channel = ResponseAPI;
	export type Detail = ResponseAPI;
}
