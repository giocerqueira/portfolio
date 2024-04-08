import React from 'react';
// import Perfil from './images/selfie.jpeg';
import * as S from './style.jsx';

function About() {
    return (
        <S.ContainerInicio>
            {/* <S.Perfil src={Perfil} alt="Uma selfie minha. Sou uma mulher de 20 anos, negra, olhos castanhos claros, cabelo cacheado e de cor castanho escuro. Na foto, o fundo é branco, e minha camisa é preta."/> */}
            <section>
                <S.DivDoInicio>
                    <h1>Hello, my name is Giovanna Cerqueira!</h1>
                    <h3>Technical Sales Intern</h3>
                    <p>I’m majoring in Computer Science, have experience in coding and a growth mindset. I’m passionate about learning new technologies and have interesting in following the software engerineering area.</p>
                </S.DivDoInicio>
            </section>
{/* 
            <S.SectionNav>
                <S.NavDoInicio>
                    <S.ListaEmbaixo>
                        <li>About</li>
                        <li>Education</li>
                        <li>Experience</li>
                        <li>Projects</li>
                        <li>Skills</li>
                        <li>Contact</li>
                    </S.ListaEmbaixo>
                </S.NavDoInicio>
            </S.SectionNav> */}
        </S.ContainerInicio>
    )
}

export default About;