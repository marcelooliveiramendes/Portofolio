import React from 'react'
import { Links, Logo, Nav } from '../../styles/Navbar'

export default function NavBar() {
  return (
    <Nav>
      <Logo><span>/</span>Marcelo Oliveira</Logo>
      <Links>
        <a href="#">Inicio</a>
        <a href="#">Sobre Mim</a>
        <a href="#">Projetos</a>
      </Links>
    </Nav>
  )
}
