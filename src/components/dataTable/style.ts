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
    gap: 8px;
    display: flex;
    align-items: center;
  }

  .tableheader{
    display: grid;
    padding: 0 16px;
    grid-template-columns: 1fr 3fr 3fr 3fr 0.5fr;
  }

  table {
    width: 100%;
    border-spacing: 0;

    tr {
      display: grid;
      grid-template-columns: 1fr 3fr 3fr 3fr 0.5fr;
      align-items: center;
      height: 64px;
      
      padding: 0 16px;

      &:nth-child(odd) {
        background: ${colors.white};
        /* Outros estilos para as linhas ímpares */
      }

      &:nth-child(even) {
        background: ${colors.secundary100};
        /* Outros estilos para as linhas pares */
      }
    }

    th {
      width: 120px;
      text-align: left;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: ${colors.secundary500};
    }

    td {
      text-align: left;
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;
      color: ${colors.secundary500};

      img{
        border-radius: 50%;
        object-fit: cover;
      }
    }

    .trade{
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