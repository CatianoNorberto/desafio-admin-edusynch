import styled from 'styled-components'

import { colors } from '../../styles/color'

export const Container = styled.div`
  width: 280px;
  height: 100%;
  border-radius: 6px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.05);
`

export const Contents = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const CardeImage = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`

export const Description = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3{
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    color: ${colors.primary500};
  }

  h4{
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    color: ${colors.textbase};
  }

  p{
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: ${colors.textbase};
  }
`