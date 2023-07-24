'use client'

import { ReactNode } from "react"

import styled, { css } from "styled-components"

import { colors } from '../../styles/color'

interface ButtonRootProps{
  children: ReactNode;
  color?: string;
  background?: string;
  border?: string;
  hoverEffect?: boolean;
  onClick?: (event: MouseEvent) => void;
}

const ButtonContainer = styled.button<ButtonRootProps>`
  color: ${(props) => props.color || 'none'};
  background: ${(props) => props.background || 'none'};
  border: ${(props) => props.border || 'none'};
  border-radius: 24px;
  font-size: 16px;
  font-weight: 500;
  transition: all 300ms;
  cursor: pointer;

  ${(props) =>
    props.hoverEffect &&
    css`
      &:hover {
        opacity: 0.9;
        background: ${colors.primary700};
      }
    `}
`;

export default function ButtonRoot({ 
  children, 
  color, 
  background, 
  border, 
  hoverEffect, 
  onClick
}: ButtonRootProps) {
  
  return (
    <ButtonContainer 
      color={color} 
      background={background} 
      border={border} 
      hoverEffect={hoverEffect}
      onClick={onClick}
    >
      {children}
    </ButtonContainer>
  )
}