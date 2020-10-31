import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Landing from './pages/Landing';
import Error from './pages/Error';
import Navigaotr from './components/Navigator';
import Projects from './pages/Projects';


function App() {
  const location = useLocation();

  return (
    <div className="App">
      { location.pathname !== '/' ? (
         <Navigaotr />
      ) : (
        null
      )}
     
     {/* Routes */}
     <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" >
            <Landing />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/about">
          <AboutMe />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
     </AnimatePresence>
    </div>
  );
}

export default App;
