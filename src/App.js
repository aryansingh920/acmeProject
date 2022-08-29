import logo from "./logo.svg";
import "./App.css";
import Login from "./Login.jsx";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App m-5 mt-2 p-1">
              <Login />
            </div>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
