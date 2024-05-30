import React from "react";
import { useFeeds } from "../hooks/useFeedsListGet";
import { useFeedStore } from "../states/useFeedStore";
import Loader from "../pages/Loader";

const FeedList: React.FC = () => {
  const { error, isLoading } = useFeeds();
  const feeds = useFeedStore((state) => state.feeds);
  const query = useFeedStore((state) => state.query);

  const filteredFeeds = feeds.filter((feed) =>
    feed.display.displayName.toLowerCase().includes(query.toLowerCase())
  );

  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  if (isLoading) return <Loader />;
  if (error)
    return (
      <p className="text-center text-red-500">
        Error: {(error as Error).message}
      </p>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 mx-auto flex justify-between align-center flex-col">
      {filteredFeeds.map((feed, index) => (
        <div
          key={index}
          className="w-full sm:w-72 mb-2 p-4 border mx-auto border-gray-200 rounded-lg shadow-lg hover:bg-blue-100 cursor-pointer"
          onClick={() => handleClick(feed?.content?.details?.directionsUrl)}
        >
          {feed.display.images && feed.display.images.length > 0 && (
            <img
              src={feed.display.images[0]}
              alt={feed.display.displayName || "image"}
              className="w-full h-48 object-cover rounded-md"
            />
          )}
          <h2 className="mt-4 text-lg font-bold text-gray-800">
            {feed.display.displayName}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default FeedList;
