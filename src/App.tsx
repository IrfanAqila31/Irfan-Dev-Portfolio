import "./App.css";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./pages/Footer";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 w-full overflow-x-hidden text-slate-300 flex flex-col items-center">
      {/* Background Mesh Global */}
      <div className="fixed inset-0 z-0 pointer-events-none flex justify-center w-full">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-purple-700/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Konten Halaman */}
      <div className="relative z-10 w-full max-w-screen-2xl">
        <Navbar />
        <HomePage />
        <AboutPage />
        <ProjectPage />
        <ContactPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
