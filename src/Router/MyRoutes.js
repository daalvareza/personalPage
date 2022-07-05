import React from 'react'
import { Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import { Contact } from '../components/Contact';
import { Footer } from '../components/layout/Footer';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Portfolio } from '../components/Portfolio';
import { Services } from '../components/Services';
import { Home } from '../components/Home';
import { Curriculum } from '../components/Curriculum';
import { Project } from '../components/Project';

export const MyRoutes = () => {
  return (
    <BrowserRouter>
        <HeaderNav/>
        <section className='content'>
            <Routes>
                <Route path='/' element={<Navigate to='/home'/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/portfolio' element={<Portfolio/>}/>
                <Route path='/curriculum' element={<Curriculum/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/project/:id' element={<Project/>}/>
                <Route path='*' element={
                  <div className='page'>
                    <h1 className='heading'>Error 404</h1>
                  </div>
                }/>
            </Routes>
        </section>        
        <Footer/>
    </BrowserRouter>
  )
}
