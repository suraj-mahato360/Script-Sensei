import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Prompt from "./components/Prompt";
import "./index.css";
import About from "./components/about";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Prompt />
      <h1 className="text-center">hello user</h1>
      <About />
      <Footer />
    </>
  );
}

export default App;
