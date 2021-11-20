import React from "react";

import Wrapper from "./component/Wrapper";
import Seearch from "./component/Search";
import Heading from "./component/Heading";
import FreindsList from "./component/FreindsList";
import Pagination from "./component/Pagination";
import { FreindsContextProvider } from "./context/FreindsContext";

function App() {
  return (
    <FreindsContextProvider>
      <Wrapper>
        <Heading />
        <Seearch />
        <FreindsList />
        <Pagination />
      </Wrapper>
    </FreindsContextProvider>
  );
}

export default App;
