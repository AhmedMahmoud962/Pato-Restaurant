import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import About from "./components/About/About.js";
import Menu from "./components/Menu/Menu.js";
import Experts from "./components/Experts/Experts.js";
import Testimoniols from "./components/Testimoniols/Testimoniols.js";
import Footer from "./components/Footer/Footer.js";
import DataExperts from "./Data/DataExperts";
import DataMenu from "./Data/DataMenu";
import TestData from "./Data/TestData";
function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Menu DataMenu={DataMenu} />
      <Experts DataExperts={DataExperts} />
      <Testimoniols TestData={TestData} />
      <Footer />
    </div>
  );
}

export default App;
