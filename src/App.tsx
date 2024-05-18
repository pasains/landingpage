import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Inventaris } from "./pages/inventaris";
import { Kepengurusan } from "./pages/kepengurusan";
import { Post } from "./content/post.content";
import { InventarisContent } from "./content/inventaris.content";

function App() {
  return (
    <div className="bg-sky-950">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/kepengurusan" element={<Kepengurusan />} />
        <Route path="/inventaris" element={<Inventaris />} />
        <Route path="/inventaris/:id" element={<InventarisContent />} />
        <Route path="/post/:page" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
