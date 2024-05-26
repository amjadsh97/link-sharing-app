import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.tsx'
import { Routes, Route, HashRouter} from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Preview from "./pages/Preview";
import {ToastProvider} from "./components/Toast";


ReactDOM.render(
  <React.StrictMode>
    <ToastProvider>
      <HashRouter>
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/preview/:userId" element={<Preview />} />
          <Route path="/" element={<App />} />
        </Routes>
      </HashRouter>
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
