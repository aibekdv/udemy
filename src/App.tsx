import React from "react";
import BaseLayout from "./layouts/BaseLayout";
import Routers from "./routes";
import "@/styles/global.scss";

const App: React.FC = () => {
  return (
    <BaseLayout>
      <Routers />
    </BaseLayout>
  );
};

export default App;
