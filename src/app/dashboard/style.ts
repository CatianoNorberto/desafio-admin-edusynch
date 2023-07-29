import styled from 'styled-components'

import { colors } from '../../styles/color'
import { sm, md, lg, xl } from '../../styles/responsiveStyles'

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
// export const DashBoardContainer = styled.div`
//   width: 100%;
//   height: 100%;

//   padding-top: 50px;
//   padding-bottom: 50px;
// `

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #F7F7F7 100%);
  background: rgba(249, 249, 249, 1);

`
// export const MenuContainer = styled.div`
//   width: 80px;
//   padding: 20px 16px;
//   background: linear-gradient(0deg, #E0DEEA, #E0DEEA),
//   linear-gradient(0deg, #FFFFFF, #FFFFFF);

//   /* ${lg`
//     width: max-content;
//   `} */
// `
export const DashboardContent = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 76rem;
  padding-left: 32px;
  padding-right: 32px;
`
export const DashboardView = styled.div`
  width: 100%;
  height: 112px;
  gap: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  margin-bottom: 20px;
`
export const DashboardLeft = styled.div`
  width: 100%;
  height: 100%;
`
export const BalanceContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: red;
  display: flex;
  align-items: center;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
`
export const BalanceLeft = styled.div`
  width: 50%;
  height: 100%;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
`
export const Balances = styled.div`
  display: flex;
  flex-direction: column;

  h4{
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
    color: ${colors.textbase};
  }
  p{
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: ${colors.textbase};
  }
`
export const BalanceRight = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.primary100};

  h3{
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    color: ${colors.textbase};
  }
`
export const DashboardRight = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`
export const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: red;
  border-radius: 8px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
`
export const ChartLeft = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`
export const ChartContent = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`
export const ChartRight = styled.div`
  width: 187px;
  height: 100%;
`

export const NetnewsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: red;
  border-radius: 8px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);
`
export const NetnewsLeft =styled.div`
  width: 50%;
  height: 100%;
`
export const NetnewsRight =styled.div`
  width: 50%;
  height: 100%;
`
