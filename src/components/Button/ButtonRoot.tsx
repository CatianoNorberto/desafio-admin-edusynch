'use client'

import { ReactNode } from "react"

import styled, { css } from "styled-components"

import { colors } from '../../styles/color'

interface ButtonRootProps{
  children: ReactNode;
  onClick?: (event: MouseEvent) => void;
}

const ButtonContainer = styled.button<ButtonRootProps>`
  transition: all 300ms;
  text-align: center;
  cursor: pointer;
`;

export default function ButtonRoot({ 
  children, 
  onClick
}: ButtonRootProps) {
  
  return (
    <ButtonContainer 
      onClick={onClick}
    >
      {children}
    </ButtonContainer>
  )
}