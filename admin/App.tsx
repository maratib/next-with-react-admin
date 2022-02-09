import React from "react";
import { BrowserRouter } from "react-router-dom";
import Hello from "./components/Hello";
import HomeRoutes from "./routes/HomeRoutes";
import Nav from "./routes/Nav";

export default function App() {
  return (
    <BrowserRouter basename="/admin">
      <div>
        <Hello name="Home" />
        <Nav />
        <h1>Test</h1>
        <HomeRoutes />
      </div>
    </BrowserRouter>
  );
}
