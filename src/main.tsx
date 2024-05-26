import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.tsx'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Preview from "./pages/Preview";
import {ToastProvider} from "./components/Toast";


ReactDOM.render(
  <React.StrictMode>
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/preview/:userId" element={<Preview />} />
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
