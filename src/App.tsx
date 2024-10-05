import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <header className="lg:container mx-auto px-4 lg:px-0">
        <Navbar />
      </header>
      <main className="lg:container mx-auto px-4 lg:px-0">
        <HeroSection />
      </main>
    </>
  );
}

export default App;
