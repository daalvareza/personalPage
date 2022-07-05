import React from 'react'
import { Link } from 'react-router-dom'
import { ListProjects } from './ListProjects'

export const Home = () => {
  return (
    <div className='home'>
      <h1>
        Hi, I'm <strong>Diego Alvarez</strong>, I'm web developer in Medellín, Colombia,
        and I offer my services in <strong>programming</strong> and <strong>development</strong> in
        all kinds of web projects.
      </h1>
      <h2>
        I have knowledge in...
        <Link to='/contact'>Contact me</Link>
      </h2>
      <section className='last-works'>
        <h2 className='heading'>Some of my projects</h2>
        <p>These are some of my personal works of web development</p>
        <ListProjects limit="2"/>
      </section>
    </div>
  )
}
