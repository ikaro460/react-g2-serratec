import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useRef, useState } from "react";
import { Rotas } from "./routes/Rotas";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Rotas />
      <Footer />
    </div>
  );
}

export default App;
