import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  const basename = import.meta.env.DEV ? "" : "/repo_name";

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
