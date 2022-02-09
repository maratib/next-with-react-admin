import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/default/About";
import Home from "../pages/default/Home";
import NotFound from "../pages/default/NotFound";
import SignIn from "../pages/default/SignIn";
import SignUp from "../pages/default/SignUp";

type Props = {
  name?: string;
};

const HomeRoutes = ({ name }: Props) => (
  <Routes>
    <Route path="/signup" element={<SignUp />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/about" element={<About />} />
    <Route path="/" element={<Home />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default HomeRoutes;
