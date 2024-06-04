import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import InstagramFeed from "./pages/galleries";
import { Organization } from "./pages/organization";
import { Post } from "./hooks/post";
import { ContactUs } from "./pages/contactus";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/organization" element={<Organization />} />
        <Route path="/galleries" element={<InstagramFeed />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/post/:page" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
