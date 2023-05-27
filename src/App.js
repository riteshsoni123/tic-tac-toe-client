import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Routing
import PrivateRoute from "./components/routing/PrivateRoute";

// Screens
import PrivateScreen from "./components/screens/PrivateScreen";
// import LoginScreen from "./components/screens/LoginScreen";
import Login from "./components/screens/Login";
// import RegisterScreen from "./components/screens/RegisterScreen";
import SignUp from "./components/screens/SignUp";
import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen";

import Game from "./components/Game";
import Navigationbar from "./components/Navigationbar";

// import "./App.css";

function App() {
  return (
    <>
      <Navigationbar />
      <Router>
        <div className="app">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <PrivateRoute>
                  <PrivateScreen />
                </PrivateRoute>
              }
            />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<SignUp />} />
            <Route
              exact
              path="/forgotpassword"
              element={<ForgotPasswordScreen />}
            />
            <Route
              exact
              path="/passwordreset/:resetToken"
              element={<ResetPasswordScreen />}
            />
            <Route exact path="/game" element={<Game />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
