import Hero from "./components/Hero";
import MatrixRain from "./components/MatrixRain";

function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <MatrixRain className="absolute inset-0" />
      <div className="flex flex-col">
        <Hero />
      </div>
    </div>
  );
}

export default App;
