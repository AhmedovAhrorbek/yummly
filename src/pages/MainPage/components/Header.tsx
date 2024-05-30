import React from "react";
import { Input } from "antd";
import { useFeedStore } from "../../../states/useFeedStore";

const { Search } = Input;

const Header: React.FC = () => {
  const setQuery = useFeedStore((state) => state.setQuery);

  const onSearch = (value: string) => {
    setQuery(value);
  };

  return (
    <div className="p-4 bg-blue-900 text-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">Yummly Food</h1>
        <div className="w-full md:w-auto">
          <Search
            placeholder="Search..."
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
