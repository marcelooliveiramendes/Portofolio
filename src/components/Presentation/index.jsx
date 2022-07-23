import React from 'react'
import { TextBox, Wrapper, Image } from '../../styles/Presentation'
import programmer from "../../img/programmer.svg"

function Presentation() {
  return (
    <Wrapper>
        <TextBox>
          <h2>Marcelo Oliveira</h2>
        </TextBox>
        <Image src={programmer}/>
    </Wrapper>
  )
}

export default Presentation