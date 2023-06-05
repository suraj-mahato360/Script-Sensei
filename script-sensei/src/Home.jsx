import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Prompt from "./components/Prompt";
import About from "./components/about";
import Footer from "./components/footer";
import Pricing from "./components/Pricing";
import Ourteam from "./components/Ourteam";

const Home = () => {
  return (
    <div>
        <Navbar />
      <Hero />
      <Prompt />
      <About />
      <Pricing />
      <Ourteam />
      <Footer />
    </div>
  )
}

export default Home