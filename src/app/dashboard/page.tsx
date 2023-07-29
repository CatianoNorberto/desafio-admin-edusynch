'use client'

import Image from 'next/image'

import NewDashboard from '../../components/DataTableDashboard'
import Balance from '../../assets/images/balance.svg'
import Chart1 from '../../assets/images/chart1.svg'
import Elefante from '../../assets/images/elefante.svg'

import { 
  // DashBoardContainer,
  DashboardView,
  DashboardLeft,
  DashboardRight,
  BalanceContainer,
  ChartContainer,
  NetnewsContainer,
  BalanceLeft,
  BalanceRight,
  Balances,
  ChartLeft,
  ChartContent,
  ChartRight,
  NetnewsLeft,
  NetnewsRight
 } from './style'

export default function page() {
  return (
    <>
      <DashboardView>
        <DashboardLeft>
          <BalanceContainer>
            <BalanceLeft>
              <Image src={Balance} alt='balance' width={64} height={64}/>
              <Balances>
                <h4>Balance in US$</h4>
                <p>(approximately)</p>
              </Balances>
            </BalanceLeft>
            <BalanceRight>
              <h3>$32,256.56</h3>
            </BalanceRight>
          </BalanceContainer>
        </DashboardLeft>
        <DashboardRight>
          <ChartContainer>
            <ChartLeft>
              <span>Daily Variation</span>
              <ChartContent>
                <Image src={Chart1} alt='' width={24} height={24}/>
                <span>ETH</span>
              </ChartContent>
              <p>+5,65%</p>
            </ChartLeft>
            <ChartRight>
              fadad
            </ChartRight>
          </ChartContainer>
          <NetnewsContainer>
            <NetnewsLeft>
              <p>NFT’s NEWS</p>
              <span>
                New ElephantX NFT to be lauched!
              </span>
            </NetnewsLeft>
            <NetnewsRight>
              <Image src={Elefante} alt='' width={140} height={112}/>
            </NetnewsRight>
          </NetnewsContainer>
        </DashboardRight>
      </DashboardView>
      <NewDashboard/>
    </>
  )
}
