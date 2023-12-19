import { Route, Routes } from "react-router-dom";
import SignIn from "./Authentication/SingIn";
import SignUp from "./Authentication/SignUp";
import Home from "./main/Home";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/">  
        <Route  index element={<SignIn/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/home" element={<Home/>}/>
      </Route>
    </Routes>
  );
}

export default App;
