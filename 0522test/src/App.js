import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import LoginForm from "./pages/LoginForm";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/main" element={<Main/>}></Route>
        <Route path="/loginform" element={<LoginForm/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
