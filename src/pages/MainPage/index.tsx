import React from "react";
import  Header  from "./components/Header";
import FeedList from "../../Components/FeedList";
const Main: React.FC = () => {
  return (
    <div className="bg-white-500">
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center my-8">Feed List</h1>
        <FeedList />
      </main>
    </div>
  );
};

export default Main;
