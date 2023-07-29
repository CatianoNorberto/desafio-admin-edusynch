
import { colors } from '../../styles/color';
import { lg } from '../../styles/responsiveStyles';

import styled from 'styled-components'

export const MenuContainer = styled.div`
  width: 80px;
  height: 100%;
  padding: 20px 16px;
  background: linear-gradient(0deg, #E0DEEA, #E0DEEA),
  linear-gradient(0deg, #FFFFFF, #FFFFFF);
`

export const MenuContents = styled.div`
  width: 100%;
  height: 100%;
  /* gap: 10px; */
  display: flex;
  /* margin-bottom: 20px; */
  flex-direction: column;
  
  

  span{
    font-size: 12px;
    font-weight: 200;
    color: '';
    text-transform: uppercase;

    ${lg`
      display: none;
    `}
  }

  a{
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: 5px;
    text-decoration: none;

    &:hover {
      background-color: '';
    }

    .listItemTitle{
      ${lg`
        display: none;
      `}
    }
  }
`