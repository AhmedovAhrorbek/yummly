import axios from "axios";
import { FetchFeedsResponse } from "../utils/types";
const API_URL = "https://yummly2.p.rapidapi.com";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "X-RapidAPI-Key": "f400da5c99mshf9e01c06f869a58p1aa2f3jsnb5bfc7b87a27",
    "X-RapidAPI-Host": "yummly2.p.rapidapi.com",
  },
  params: {
    limit: "24",
    start: "0",
  },
});



/// feed list
export const fetchFeeds = async (): Promise<FetchFeedsResponse> => {
  const response = await api.get<FetchFeedsResponse>("/feeds/list");
  return response.data;
};

