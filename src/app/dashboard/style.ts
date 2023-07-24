import styled from 'styled-components';

import { colors } from '../../styles/color'
import { sm, md, lg, xl } from '../../styles/responsiveStyles';

export const DashBoardContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(180px, auto);
  grid-auto-flow: dense;

  ${xl`
    grid-template-columns: repeat(3, 1fr);
  `}

  ${lg`
    grid-template-columns: repeat(2, 1fr);
  `}
  ${md`
    grid-template-columns: repeat(1, 1fr);
  `}
  ${sm`
    grid-auto-rows: minmax(120px, auto);
  `}
`;

export const Box = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 2px solid ${colors.white};
`;

export const Box1 = styled(Box)`
  grid-column: span 1;
  grid-row: span 3;
`;

export const Container = styled.div`
  display: flex;

`
export const MenuContainer = styled.div`
  width: 80px;
  padding: 5px 20px;
  border-right: 2px solid ${colors.white};

  ${lg`
    width: max-content;
  `}
`
export const DashboardContent = styled.div`
  padding: 5px 20px;
  width: 100%;
  // padding: 5px 20px;
  // width: 85%;
`
