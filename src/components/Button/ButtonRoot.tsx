'use client'

import { type } from "os";
import { ReactNode } from "react"

import styled from "styled-components"

interface ButtonRootProps{
  children: ReactNode;
  onClick?: (event: MouseEvent) => void;
  type?: string;
  value?: string;
  id?: string;
  item?: string;
}

const ButtonContainer = styled.button<ButtonRootProps>`
  transition: all 300ms;
  text-align: center;
  cursor: pointer;
`;

export default function ButtonRoot({ 
  children, 
  onClick,
  type,
  value,
  id,
  item
}: ButtonRootProps) {
  
  return (
    <ButtonContainer 
      onClick={onClick}
      type={type}
      value={value}
      id={id}
      item={item}
    >
      {children}
    </ButtonContainer>
  )
}