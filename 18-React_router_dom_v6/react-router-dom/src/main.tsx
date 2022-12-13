import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Menu } from './components/menu';
import { Posts } from './pages/Posts';
import { Redirect } from './pages/Redirect';
import { NotFound } from './pages/NotFound';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/posts' element={<Posts />}>
          <Route path=':id' element={<div>Oi</div>}/>
        </Route>
        <Route path='/posts' element={<Posts />} />
        {/*Rotas com paramentros, rota abaixo*/}
        <Route path='/posts/:id' element={<Posts />} />
        <Route path='/redirect' element={<Redirect />} />     
        <Route path='*' element={<NotFound />} />     
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
