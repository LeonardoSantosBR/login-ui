import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import SignIn from "../pages/signin/signin";
import SignUp from "../pages/signup/signup";
import Profile from "../pages/profile/profile";

const RoutesOfAplication = () => {
  return (
    <BrowserRouter>
      <Routes>
        //rota padrão
        <Route element={<Navigate to="/signin" />} path="/" />
        <Route element={<SignIn />} path="signin" />
        <Route element={<SignUp />} path="signup" />
        <Route element={<Profile />} path="profile" />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesOfAplication;
