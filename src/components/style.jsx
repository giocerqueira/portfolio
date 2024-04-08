import styled from 'styled-components';

// Estilização navegacao.jsx
export const NavDaHeader = styled.nav`
    
`

export const Lista = styled.ul `
    width: 100%;
    display: flex;
    justify-content: space-around;
    list-style: none;
    height: 20vh;
    align-items: center;
    @media (min-width: 320px) and (max-width: 768px){
        display: flex; 
        flex-direction: column;
        height: 40vh;
        border: solid red;
    }

    a {
    text-decoration: none;
    /* text-transform: uppercase; */
    font-size: 1.5rem;
    }
`

// Estilização inicio.jsx

export const ContainerInicio = styled.main`
    display: flex;
    /* align-items: center; */
    /* padding-top: 3rem; */
    padding-left: 8rem;
    border: solid blue;
    flex-direction: column;
    justify-content: space-around;
    height: 40vh;
    font-size: 1rem;
    @media (min-width: 320px) and (max-width: 768px){
        display: flex;
        flex-direction: column;
        img {
            width: 50vw;
        }
    }
`
export const DivDoInicio = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: solid white;
    width: 30%;
    height: 25vh;
`

export const Perfil = styled.img`
    width: 20vw;
    height: 40vh;
    border-radius: 50%;
`

export const SectionNav = styled.section `
    display: flex;
    border: solid green;
    width: 50%;
`

export const NavDoInicio = styled.nav `
    display: flex;
    justify-content: space-evenly;
    width: 100%
`

export const ListaEmbaixo = styled.ul `
    display: flex;
    list-style: none;
    width: 100%;
    justify-content: space-evenly;
`



//Estilização - Início







//------------ teste na navegação

export const Header = styled.header`
    /* background-image: url("https://i0.statig.com.br/bancodeimagens/2f/ym/i8/2fymi85z5vo5pcl5rsnsr3xgi.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 80vh; */

`

//Estilização Sobre
export const MainSobre = styled.main`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const SectionDoSobre = styled.section`
    height: 70vh;
    width: 30vw;
    margin-top: 3rem;
    border: solid red 5px;
    border-radius: 50px;
    h2 {
        text-align: center;
    }
`

export const Card = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 50vh;
`

export const DivCard = styled.div` 
    width: 25vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 20vh; 
    h2 {
        color: tomato;
    }

    h3 {
        color: violet;
    }

`

export const DivCard2 = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    height: 70vh;
    div {
        display: flex;
        align-items: center;
    }
`