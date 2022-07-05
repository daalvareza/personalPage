import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { projects } from '../data/projects';

export const Project = () => {

    const [project, setProject] = useState({});
    const params = useParams();

    useEffect(()=> {
        const project = projects.filter(project => project.id === params.id);
        setProject(project[0]);
    }, [])
  return (
    <div className='page page-work'>
        <div className='mask'>
            <img src={`/images/${project.id}.png`}></img>
        </div>
        <h1 className='heading'>Project: {params.id}</h1>
        <p>{project.technologies}</p>
        <p>{project.description}</p>
        <a href={`https://${project.url}`} target="_blank">Go to the project</a>
    </div>
  )
}
