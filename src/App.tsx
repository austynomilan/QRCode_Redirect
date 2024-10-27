import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Entry from "./component/Entry";
import Home from "./component/Home";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" index={true} element={<Entry />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
