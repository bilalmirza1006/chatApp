import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
import SignUp from './SignUpForm';
import SignIn from './SignInForm';
// import SignUp from './pages/SignUp';
// import SignIn from './pages/SignIn';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;