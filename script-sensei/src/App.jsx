import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Prompt from "./components/Prompt";
import About from "./components/about";
import 'remixicon/fonts/remixicon.css'
import "./index.css";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Prompt />
      <About />
      <Footer />
    </>
  );
}

export default App;
