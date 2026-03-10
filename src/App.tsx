import "./App.css";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
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
      </div>
    </>
  );
}

export default App;
