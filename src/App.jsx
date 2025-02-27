import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import { Routes, Route } from "react-router";
import Artist from "./pages/Marketplace";
import Marketplace from "./pages/Marketplace";
import Community from "./pages/Community";



function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/community" element={<Community />} />
        
      </Route>
    </Routes>
  );
}

export default App;
