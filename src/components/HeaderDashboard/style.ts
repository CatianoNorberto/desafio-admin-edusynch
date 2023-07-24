import styled from "styled-components";

import { colors } from '../../styles/color'

export const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  z-index: 90;
  /* background: ${colors.white}; */
  background: yellowgreen;
`
export const Contents = styled.div`
  width: 100%;
  max-width: 76rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 12px 0;
`
export const CoinCarrousel = styled.div`
  width: 365px;
  height: 100%;
`
export const HeaderAction = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
