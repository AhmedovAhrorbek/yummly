import { useQuery } from "react-query";
import { fetchFeeds } from "../services/api";
import { useFeedStore } from "../states/useFeedStore";
import { FetchFeedsResponse } from "../utils/types"; // Ma'lumotlar turi import qilingadi

export const useFeeds = () => {
  const setFeeds = useFeedStore((state) => state.setFeeds);

  const { isLoading, error } = useQuery<FetchFeedsResponse, Error>(
    "feeds", // queryKey
     fetchFeeds, // queryFn
      {
        onSuccess: (data) => {
        setFeeds(data.feed);
      },
    }
  );

  return { isLoading, error };
};
