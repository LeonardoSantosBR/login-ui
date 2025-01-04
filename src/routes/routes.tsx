import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import SignIn from "../pages/signin/signin";
import SignUp from "../pages/signup/signup";

const RoutesOfAplication = () => {
  return (
    <BrowserRouter>
      <Routes>
        //rota padrão
        <Route element={<Navigate to="/signin" />} path="/" />

        <Route element={<SignIn />} path="signin" />
        <Route element={<SignUp />} path="signup" />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesOfAplication;
