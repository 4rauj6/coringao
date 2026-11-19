import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import History from "./pages/History";
import { useLayoutEffect, useRef } from "react";

function PageReset() {
  const scrollReset = useLocation();
  const resetTrigger = useRef(null);

  useLayoutEffect(() => {
    resetTrigger.current?.scrollIntoView({ block: "start", behavior: "auto" });
  }, [scrollReset.pathname]);

  return <div ref={resetTrigger}></div>;
}

function App() {
  const basename = import.meta.env.DEV ? "" : "/coringao";

  return (
    <BrowserRouter basename={basename}>
      <PageReset />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/historia-sccp" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
