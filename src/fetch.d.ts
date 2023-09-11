import { AxiosRequestConfig, AxiosResponse } from "axios";
export function fetcher(url: string, opts: AxiosRequestConfig): Promise<AxiosResponse<any>>;
