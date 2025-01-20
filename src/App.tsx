import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Organization } from "./pages/organization";
import { ContactUs } from "./pages/contactus";
import { Post } from "./content/post";
import { PostPage } from "./pages/post";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/organization" element={<Organization />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/post/:page" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
