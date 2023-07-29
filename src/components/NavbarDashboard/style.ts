import styled from "styled-components";

import { colors } from '../../styles/color'
import { xs, sm, md, lg, xl } from '../../styles/responsiveStyles';

interface PerfilDataProps {
  isVisible: boolean;
}

export const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
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
  
  padding: 12px 32px;

  
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
export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
export const Perfil = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
`
export const Userperfil = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  img{
    border-radius: 50%;
    object-fit: cover;
  }  
`
export const PerfilData = styled.ul<PerfilDataProps>`
  width: 124px;
  height: 55px;
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: center;
  justify-content: center;
  top: 35px;

  position: absolute;
  z-index: 300;
  border-radius: 4px;
  background: ${colors.white};
  box-shadow: 0px 0px 10px 0px #0000000D;
  padding: 4px 12px;
  transition: transform 0.3s ease-out;

  transform: ${props => props.isVisible ? "translateX(100%)" : "translateX(-40%)"};

  li {
      display: flex;
      font-size: 14px;
      line-height: 16px;
      font-weight: 400;
      color: ${colors.secundary500}

    a {
      text-decoration: none;
      color: inherit;
    }

    img {
      margin-right: 20px;
    }
  }
`
export const ModalContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
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
  }

  form {
    width: 100%;
    padding: 20px 0;
    
    label{
      position: absolute;
      left: 16px;
      color: ${colors.secundary300};
    }

    input {
      width: 100%;
      padding: 16px 32px 16px 48px;
      line-height: 24px;
      font-size: 16px;
      color: ${colors.textbase};
      background: ${colors.white};
      border-radius: 8px;
      border: 1px solid ${colors.secundary300};
    }
  }
`
export const FormContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
export const Privacy = styled.div`
  display: flex;
  gap: 8px;
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
    font-weight: 700;
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