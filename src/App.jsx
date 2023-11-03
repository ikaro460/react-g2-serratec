import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="*" element={<h1>Página Não Encontrada</h1>} />
    </Routes>
  );
}

export default App;
