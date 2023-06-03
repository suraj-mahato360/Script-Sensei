import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Prompt from "./components/Prompt";
import About from "./components/about";
import 'remixicon/fonts/remixicon.css'
import "./index.css";
import Footer from "./components/footer";
import Pricing from "./components/Pricing";
import Ourteam from "./components/Ourteam";
import "react-type-animation"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Prompt />
      <About />
      <Pricing />
      <Ourteam />
      <Footer />
    </>
  );
}

export default App;
