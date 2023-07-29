import styled from "styled-components";

import { colors } from '../../styles/color'

export const DataTableContainer = styled.div`
  width: 100%;
  height: 449px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 8px;
  background: ${colors.white};
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);

  h3{
    text-align: center;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
    color: ${colors.secundary500};
  }
  
  .crypto{
    display: flex;
    align-items: center;
    gap: 8px;
  }

  table {
    width: 100%;
    border-spacing: 0;

    tr {
      display: flex;
      text-align: left;
      align-items: center;
      justify-content: space-between;
      height: 64px;
      background: rgba(255, 255, 255, 1);
    }

    .trcontent{
      display: flex;
      justify-content: space-between;
      text-align: left;
      align-items: center;
      height: 64px;
      background: rgba(246, 246, 246, 1);
    }

    th {
      text-align: left;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: ${colors.secundary500};
    }

    td {
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;
      color: ${colors.secundary500};

      img{
        border-radius: 50%;
        object-fit: cover;
      }
    }

    button{
      width: 80px;
      border: none;
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
      padding: 8px 16px;
      border-radius: 32px;
      color:${colors.white};          
      background:${colors.tertiary700};
    }
  }
`
export const ActionView = styled.div`
  display: flex;
  margin-top: 16px;
  align-items: center;
  justify-content: center;
  
  button{
    gap: 8px;
    display: flex;
    border: none;
    align-items: center;
    color: ${colors.primary500};
    background: none;

    p{
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }
  }
`
export const DataTableHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  button{
    gap: 8px;
    width: 120px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 32px;
    color: ${colors.white};
    background:${colors.primary500};

    p{
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
    }
  }
`
export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  h4{
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    color: ${colors.textbase};
  }
`
export const ModalContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  flex-direction: column;

  h4{
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    color: ${colors.textbase};
  }

  form {
    width: 100%;
    padding: 20px 0;
    
    Select{
      width: 100%;
      padding: 16px;
      line-height: 24px;
      font-size: 16px;
      font-weight: 400;
      color: ${colors.textbase};
      border-radius: 8px;
      border: 1px solid ${colors.secundary300};
    }

    input {
      width: 100%;
      padding: 16px;
      line-height: 24px;
      font-size: 16px;
      color: ${colors.textbase};
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
export const ModalAction = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;

  >button{
    width: 100%;
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
`