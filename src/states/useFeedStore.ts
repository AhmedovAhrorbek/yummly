import create from "zustand";
import { Feed } from "../utils/types";
/// feed list
interface FeedStoreState {
  feeds: Feed[];
  setFeeds: (feeds: Feed[]) => void;
  query: string;
  setQuery: (query: string) => void;
}

export const useFeedStore = create<FeedStoreState>((set) => ({
  feeds: [],
  setFeeds: (feeds) => set({ feeds }),
  query: "",
  setQuery: (query) => set({ query }),
}));

