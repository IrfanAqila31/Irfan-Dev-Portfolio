import "./App.css";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <div className="bg-slate-950">
        <Navbar />
        <HomePage />
        <AboutPage />
      </div>
    </>
  );
}

export default App;
