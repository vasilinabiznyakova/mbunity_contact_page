import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route index element={<Contact />} />
        <Route path="/user" element={<p>content of user page</p>} />
        <Route path="/cart" element={<p>content of cart page</p>} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
