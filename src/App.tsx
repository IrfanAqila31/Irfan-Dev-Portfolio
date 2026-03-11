import "./App.css";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./pages/Footer";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <>
      <div className="bg-slate-950">
        <Navbar />
        <HomePage />
        <AboutPage />
        <ProjectPage />
        <ContactPage />
        <Footer />
      </div>
    </>
  );
}

export default App;
