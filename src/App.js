import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route
          path="/"
          exact={true}
          // component={Home}
          element={<Home />}
        />

        <Route
          path="/about"
          // component={About}
          element={<About />}
        />
        <Route
          path="/movie/:id"
          // component={About}
          element={<Detail />}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
