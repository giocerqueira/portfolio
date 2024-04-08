import React from 'react';
import About from './inicio.jsx';
import Education from './sobre.jsx';
import Projects from './projetos.jsx';
import Contact from './galeria.jsx';
import * as S from './style.jsx';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function Navegacao() {
    return (
        // <S.Header>
            <BrowserRouter>
                <S.NavDoInicio>
                    <S.ListaEmbaixo>
                        <li>
                            {' '}
                            <Link to="/About">About</Link>{' '}

                        </li>
                        <li>
                            {' '}
                            <Link to="/Education">Education</Link>{' '}
                            
                        </li>
                        <li>
                            {' '}
                            <Link to="/Experience">Experience</Link>{' '}
                            
                        </li>
                        <li>
                            {' '}
                            <Link to="/Projects">Projects</Link>{' '}
                        </li>
                        <li>
                            {' '}
                            <Link to="/Skills">Skills</Link>{' '}
                        </li>
                        <li>
                            {' '}
                            <Link to="/Contact">Contact</Link>{' '}
                        </li>
                    </S.ListaEmbaixo>
                </S.NavDoInicio>

                <Routes>
                    <Route path="/About" element={<About/>}/>
                    <Route path="/Education" element={<Education/>}/>
                    <Route path="/Projects" element={<Projects/>}/>
                    <Route path="/Contact" element={<Contact/>}/>
                </Routes>
            </BrowserRouter>
        // </S.Header>
    )
}

export default Navegacao;