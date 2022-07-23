import React from 'react'
import Presentation from '../../components/Presentation'
import NavBar from '../../components/NavBar'
import { Wrapper } from '../../styles/Home'

function Home() {
  return (
    <Wrapper>
        <NavBar />
        <Presentation />
    </Wrapper>
  )
}

export default Home