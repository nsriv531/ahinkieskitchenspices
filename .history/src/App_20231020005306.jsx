import "./App.css";
import Navbar from "./Navbar";
import Landing from "./Landing";
import Projects from "./Projects";
import HireMe from "./HireMe";
import Volunteering from "./Volunteering";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
