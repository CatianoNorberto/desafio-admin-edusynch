import styled from "styled-components";

import { colors } from '../../styles/color'

export const FooterContainter = styled.div`
  width: 100%;
  height: 100%;
`
export const FooterContents = styled.div`
  width: 100%;
  margin: auto;
  max-width: 76rem;
  padding: 20px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  p{
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    color: ${colors.textbase};
  }
`