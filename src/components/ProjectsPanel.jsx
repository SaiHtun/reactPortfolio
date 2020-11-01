import React from 'react';
import './ProjectsPanel.css';
import ProjectCard from './ProjectCard';
import ncDesktop from '../assets/nc-desktop.png';
import icDesktop from '../assets/ic-desktop.png';
import icMobile from '../assets/ic-mobile.jpg';
import hnDesktop from '../assets/hn-desktop.png';
import { motion } from 'framer-motion';

const projects = [
  { name: 'Outstagramm M',
    fe: 'React',
    be: 'Firebase',
    img: `${icMobile}`,
    area: 'icm',
    css: 'Pure CSS / No library',
    StateMgmt: 'Hooks + Context API',
    des: 'A very simple basic crud app, I made it with no security or performance concerns, probably require tons of refactoring too but let me just keep it that way for now 😬, and it might contain only 0.01% of the actual “Instagram” features but kindly have a look and feel free to test.',
    view: 'mobile',
    web: 'https://outstagramm-2bbb5.web.app/signin',
    git: 'https://github.com/SaiHtun/outstagramm'
  },
  { name: 'Outstagramm D',
    fe: 'React',
    be: 'Firebase',
    area: 'icd',
    img: `${icDesktop}`,
    css: 'Pure CSS / No library',
    StateMgmt: 'Hooks + Context API',
    view: 'desktop',
    web: 'https://outstagramm-2bbb5.web.app/signin',
    git: 'https://github.com/SaiHtun/outstagramm'
  },
  { name: 'Netflix Clone',
    fe: 'React',
    area: 'nc',
    img: `${ncDesktop}`,
    css: 'Pure CSS / No library',
    npm : 'movie-trailer, react-youtube',
    API: 'https://api.themoviedb.org/', 
    view: 'desktop',
    web: 'https://netflix-clone-865b0.web.app/',
    git: 'https://github.com/SaiHtun/netflix'
  },
  {
    name: 'Hacker news Clone',
    fe: 'Vue',
    css: 'Pure CSS / No library',
    area: 'hnc',
    img: `${hnDesktop}`,
    responsiveness: 'No',
    API: 'https://api.hackernews.io',
    StateMgmt: 'Vue Store',
    view: 'desktop',
    web: 'https://hacker-news-clone-silk.now.sh/#/news',
    git: 'https://github.com/SaiHtun/hacker-news-clone'
  }

]

const panelVarients = {
  before: {
    x: 50,
    opacity: 0
  },
  after: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 1.3,
      staggerChildren: 0.3
    }
  },
  exit: {
    x: -50,
    opacity: 0,
    transition: {
      type: 'tween',
      duration: 1.3,
      staggerChildren: 0.3
    }
  }
}

function ProjectsPanel({ open, name }) {
  return (
    <motion.div className="projectsPanel"
    variants={ panelVarients}
    >
      { projects.map((project, index) => {
        return (
          <ProjectCard  key={index} project={project} open={open} name={name}/>
        )
      })}
    </motion.div>
  )
}

export default ProjectsPanel
