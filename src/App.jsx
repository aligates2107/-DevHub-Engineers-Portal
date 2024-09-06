// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Parent route with Layout */}
        <Route path="/" element={<Layout />}>
          {/* Child routes */}
          <Route index element={<Home />} />  {/* Renders at "/" */}
          {/* <Route path="about" element={<About />} />  */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
