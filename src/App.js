
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './features/home/HomePage.jsx';
import AboutPage from './features/about/AboutPage.jsx';
import OnlineTest from "./features/quiz/OnlineTest.jsx";
import Test from "./features/quiz/Test.jsx";
import ContactUS from "./features/contact/ContactUs.jsx";
import MyResults from "./features/quiz/MyResults.jsx";

import './styles/index.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/OnlineTest" element={<OnlineTest />} />
          <Route path="/OnlineTest/:SubCatId/:SubCatName" element={<Test />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Contact" element={<ContactUS />} />
          <Route path="/MyResults" element={<MyResults />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
