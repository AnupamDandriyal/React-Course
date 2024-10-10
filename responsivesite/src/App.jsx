import "./App.css";
import Header from "./components/common/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
    <Router>
      <Header />
      <Home />
    </Router>
  );
}

export default App;
