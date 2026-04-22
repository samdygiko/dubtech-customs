import ScrollProgress from "./components/ScrollProgress";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import InstagramStrip from "./components/InstagramStrip";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <InstagramStrip />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
