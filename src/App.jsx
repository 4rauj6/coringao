import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import History from "./pages/History";
import { useEffect } from "react";

function App() {
  const basename = import.meta.env.DEV ? "" : "/coringao";

  return (
    <BrowserRouter basename={basename}>
      <ScrollHandler />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/historia-sccp" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

function ScrollHandler() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default App;
