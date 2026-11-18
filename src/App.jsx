import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import History from "./pages/History";

function App() {
  const basename = import.meta.env.DEV ? "" : "/coringao";

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/historia-sccp" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
