import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./Component/Header";
import About from "./Pages/About";
import ContactPage from "./Pages/ContactPage";
import Error from "./Pages/Error";
import Home from "./Pages/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
