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