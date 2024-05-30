
import React from "react";
import Main from "./pages/MainPage";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
       <Main />
    </QueryClientProvider>
  );
};

export default App;
