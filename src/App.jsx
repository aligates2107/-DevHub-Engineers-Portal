
// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home';
import Resources from './components/Resources/Resources';
import Documentation from './components/Resources/Documentation/Documentation';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Parent route with Layout */}
        <Route path="/" element={<Layout />}>
          {/* Child routes */}
          <Route index element={<Home />} />  {/* Renders at "/" */}
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/documentation" element={<Documentation />} />  

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
