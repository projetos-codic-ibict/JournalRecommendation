import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Text from './Text'
import Abstract from "./Abstract";

export default function App() {
  console.log('kkk')

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Text />} />
        <Route path="/search" element={<Abstract />} />
      </Routes>
    </Router>
  );
}