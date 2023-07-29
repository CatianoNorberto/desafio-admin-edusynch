import styled, { keyframes, css } from "styled-components";

import { colors } from '../../styles/color'
import { xs, sm, md, lg, xl } from '../../styles/responsiveStyles';

export const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  box-sizing: border-box;
  z-index: 90;
  background: ${colors.white};
`
export const Contents = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 12px 32px;

  position: relative;

  ${xl`
    max-width: 1216px;
  `}
  ${lg`
    max-width: 1024px;
  `}
  ${md`
    max-width: 768px;
  `}
  ${sm`
    max-width: 480px;
  `}
  ${xs`
    max-width: 320px;
  `}
`
export const HeaderTop = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${md`
    margin-bottom: 16px;
  `}
`
export const HeaderLeft = styled.div`
  gap: 30px;
  display: flex;
  align-items: center;

  .headerlink{
    display: flex;
    gap: 20px;
  }
`
export const HeaderRight = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
`
const scrollX = keyframes`
  from{
    left: translateX(0);
  }
  to{
    transform: translateX(-100%)
  }
`
export const HeaderBottom = styled.div`
  position: absolute;
  left: 722px;
  top: 26px;
  display: flex;
  width: 360px;
  overflow: hidden;
  user-select: none;

  ${xl`
    left: 600px;
  `}
  ${lg`
    left: 420px;
  `}
  ${md`
    position: initial;
  `}

`
export const CoinCarrousel = styled.div`
  width: 100%;
  display: flex;
  flex-shrink: 0;
  margin: 0 auto;
  white-space: nowrap;
  justify-content: space-around;
  animation: ${scrollX} 10s linear infinite;

  ${md`
    border-top: 1px solid #F4F3F8;
  `}
`
export const GroupNumber = styled.div`
  display: flex;
  gap: 20px;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);

  p{
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    span{
      margin-left: 8px;
    }
    strong{
      margin-left: 8px;
    }
  }
`

export const HeaderAction = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;

  .signIn{
    button{
      color: ${colors.textbase};
      background: none;
    }
  }
  
  button{
    border: none;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    padding: 8px 16px;
    border-radius: 32px;
    color: ${colors.white};
    background:${colors.primary500};
  }
`
export const ModalContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  flex-direction: column;

  position: relative;

  h4{
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    color: ${colors.secundary500};

    span{
      color: ${colors.primary500};
    }

    ${md`
      font-size: 20px;
    `}
    ${sm`
      font-size: 16px;
    `}
    ${xs`
      font-size: 16px;
    `}
  }

  form {
    width: 100%;
    padding: 20px 0;
    
    label{
      left: 16px;
      position: absolute;
      color: ${colors.secundary300};
    }

    input {
      width: 100%;
      font-size: 16px;
      line-height: 24px;
      border-radius: 8px;
      color: ${colors.textbase};
      padding: 16px 32px 16px 48px;
      border: 1px solid ${colors.secundary300};
    }
    
    a{
      display: flex;
      font-size: 12px;
      font-weight: 400;
      line-height: 14px;
      justify-content: flex-end;
      color: ${colors.secundary500};
    }
  }
`
export const FormShowhide = styled.div`
  right: 16px;
  position: absolute;

  button{
    color: ${colors.textbase};
    background: none;
    border: none;
  }
`

export const FormContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`
export const Privacy = styled.div`
  gap: 8px;
  display: flex;
  margin-bottom: 20px;

  >input{
    width: 16px;
    height: 16px;
    border-radius: 4px;
    border: 1px solid ${colors.primary500};
  }

  label{
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    color: ${colors.textbase};
    span{
      font-weight: 900;
    }
  }
`
export const ModalAction = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;

  >button{
    border: none;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    padding: 14px 24px;
    border-radius: 32px;
    margin-bottom: 20px;
    color:${colors.white};
    background:${colors.primary500};
  } 

  label{
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    color: ${colors.textbase};
    a{
      font-weight: 900;
    }

    span{
      color: ${colors.primary500};
    }
  }
`