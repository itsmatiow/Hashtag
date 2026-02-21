// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import "./App.css";
// import Faq from "./pages/Faq";
// import Contact from "./pages/Contact";
// import WorkFlow from "./pages/WorkFlow";
// import Projects from "./pages/Projects";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/workflow" element={<WorkFlow />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/faq" element={<Faq />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout"; // مسیر رو چک کن
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import WorkFlow from "./pages/WorkFlow";
import Projects from "./pages/Projects";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* این Route والد، همون پوسته اصلیه که تو کل سایت ثابته */}
        <Route element={<Layout />}>
          {/* اینا میشن بچه‌های Layout که میرن میشینن جای Outlet */}
          <Route path="/" element={<Home />} />
          <Route path="/workflow" element={<WorkFlow />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
