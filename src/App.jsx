import Header from "../src/components/Header";
import Hero from "../src/components/Hero";
import Footer from "./components/Footer";
import About from "../src/components/About"
import Contact from "./components/Contact";
export default function App() {
  return (
    <section>
      <Header />
      <Hero />
      <About />
      <Contact/>
      <Footer />
    </section>
  );
}
