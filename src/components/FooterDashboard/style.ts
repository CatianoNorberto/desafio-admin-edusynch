import styled from "styled-components";

import { colors } from '../../styles/color'
import { xs, sm, md, lg, xl, xxl } from '../../styles/responsiveStyles';

export const FooterContainter = styled.div`
  width: 100%;
  height: 100%;
`
export const FooterContents = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1440px;
  padding: 20px 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  
  ${xl`
    max-width: 1216px;
  `}
  ${lg`
    max-width: 1024px;
  `}
  ${md`
    max-width: 768px;
    justify-content: space-between;
  `}
  ${sm`
    max-width: 480px;
    justify-content: center;
  `}
  ${xs`
    max-width: 320px;
    justify-content: center;
  `}
  
`
export const FooterCopyLeft = styled.div`
  img {
    ${xxl`
      display: none;
    `}
    ${xl`
      display: none;
    `}
    ${lg`
      display: none;
    `}
    ${md`
      display: flex;
    `}
    ${sm`
      display: none;
    `}
    ${xs`
      display: none;
    `}
  }
`
export const FooterCopyRight = styled.div`
  p{
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: ${colors.textbase};
  }
`
