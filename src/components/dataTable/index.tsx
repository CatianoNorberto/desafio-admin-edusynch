'use client'

import Image from 'next/image'
import { IoAddOutline } from 'react-icons/io5'

import { Button } from '../../components/Button'
import Image1 from '../../assets/images/image1.svg'

import { DataTableContainer, ActionView } from './style'

export default function DataTable() {
  return (
    <DataTableContainer>
      <h3>Top Cryptos</h3>
      <table>
        <tbody>
          <tr>
            <th>#</th>
            <th>Crypto</th>
            <th>Price</th>
            <th>Change</th>
            <th>Trade</th>
          </tr>
          <tr>
            <td>1</td>
            <td className='crypto'>
              <Image src={Image1} alt='' width={32} height={32}/>
              Bitcoin BTC
            </td>
            <td>US$ 25.499,52</td>
            <td>+5,65%</td>
            <td>
              <Button.Root>
                <Button.Text text='Buy'/>
              </Button.Root>
            </td>
          </tr>
          <tr className='trcontent'>
            <td>1</td>
            <td className='crypto'>
              <Image src={Image1} alt='' width={32} height={32}/>
              Bitcoin BTC
            </td>
            <td>US$ 25.499,52</td>
            <td>+5,65%</td>
            <td>
              <Button.Root>
                <Button.Text text='Buy'/>
              </Button.Root>
            </td>
          </tr>
        </tbody>
      </table>
      <ActionView>
        <Button.Root>
          <Button.Text text='View more'/>
          <IoAddOutline size={12}/>
        </Button.Root>
      </ActionView>
    </DataTableContainer>
  )
}
