import styled from "styled-components";

import { colors } from '../../styles/color'

export const DataTableContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${colors.white};

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
  align-items: center;
  justify-content: center;

  button{
    display: flex;
    align-items: center;
    gap: 8px;
    border: none;
    color: ${colors.primary500};
    background: none;

    p{
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
    }
  }
`