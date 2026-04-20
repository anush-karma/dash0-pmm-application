import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SmoothScrollProvider } from "./components/SmoothScrollProvider";
import AnushkaHeroNew from "./components/AnushkaHeroNew";
import WhatIStartWith from "./components/WhatIStartWith";
import WorkSplitNew from "./components/WorkSplitNew";
import ThreeCampaignsNew from "./components/ThreeCampaignsNew";
import UltimateVision from "./components/UltimateVision";
import WhyDash0New from "./components/WhyDash0New";

function App() {
  const Home = () => (
    <SmoothScrollProvider>
      <AnushkaHeroNew />
      <WhatIStartWith />
      <WorkSplitNew />
      <ThreeCampaignsNew />
      <UltimateVision />
      <WhyDash0New />
    </SmoothScrollProvider>
  );

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;