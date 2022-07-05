import React from 'react'
import { Link} from "react-router-dom";
import { projects } from '../data/projects';

export const ListProjects = ({limit}) => {
  return (
    <section className='projects'>
        {
          projects.slice(0, limit).map(project => (
            <article key={project.id} className='project-item'>
              <div className='mask'>
                <img src={`/images/${project.id}.png`}></img>
              </div>
              <span>{project.categorie}</span>
              <h2><Link to={`/project/${project.id}`}>{project.name}</Link></h2>
              <h3>{project.technologies}</h3>
            </article>
          ))
        }
      </section>
  )
}
