import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navigator.css';

const navs = [ "About", "Skills", "Projects", "Showcase", "Contact" ];


function Navigator() {
  const location = useLocation();
  const path = location.pathname.substr(1);

  return (
    <motion.div  className="navigator"
    // variants={navigatorVarients}
    initial="before"
    animate="after">
      { navs.map((nav, index) => {
        if( nav.toLowerCase() === path ) {
          return (
            <Link to={`${nav.toLowerCase()}`} key={index} >
              <motion.p className="nav__selected">{ nav }</motion.p>
            </Link>
            // <motion.p className="nav__selected" key={index}
            // variants={ childSelected }>{ nav }</motion.p>
          )
        }
        return (
          <Link to={`${nav.toLowerCase()}`} key={index}>
            <motion.p className="nav__unSelected" 
            whileHover={{ scale: 1.2 }}>{ nav }</motion.p>
          </Link>
        )
      })}
    </motion.div>
  )
}



export default Navigator
