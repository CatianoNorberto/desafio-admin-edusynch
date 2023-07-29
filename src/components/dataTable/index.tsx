import React, { useState } from "react";
import Image from 'next/image'
import { IoAddOutline } from 'react-icons/io5'

import { Button } from '../../components/Button'
import Image1 from '../../assets/images/image1.svg'

import { DataTableContainer, ActionView } from './style'

const datatable = [
  { id: '1', crypto: 'Bitcoin BTC', price: '$50,000', change: '+5.2%' },
  { id: '2', crypto: 'Ethereum ETH', price: '$3,500', change: '+2.8%' },
  { id: '3', crypto: 'Cardano ADA', price: '$2.40', change: '-1.5%' },
  { id: '4', crypto: 'Solana SOL', price: '$2.40', change: '-1.5%' },
  { id: '5', crypto: 'Solana SOL', price: '$2.40', change: '-1.5%' },
  { id: '6', crypto: 'Solana SOL', price: '$2.40', change: '-1.5%' },
];

interface CryptoItem {
  id: number;
  crypto: string;
  price: number;
  change: number;
}

export default function DataTable() {
  const [showAllRows, setShowAllRows] = useState<boolean>(false);
  const initialRowCount = 4; 

  const toggleShowAllRows = () => {
    setShowAllRows((prevShowAllRows) => !prevShowAllRows);
  };

  const formatPrice = (price: string): number => {
    return parseFloat(price.replace('$', '').replace(',', ''));
  };

  const formatChange = (change: string): number => {
    return parseFloat(change.replace('%', ''));
  };

  return (
    <DataTableContainer>
      <h3>Top Cryptos</h3>
      <table>
        <thead>
          <tr className='tableheader'>
            <th>#</th>
            <th>Crypto</th>
            <th>Price</th>
            <th>Change</th>
            <th>Trade</th>
          </tr>
        </thead>
        <tbody>
          {datatable.slice(0, showAllRows ? datatable.length : initialRowCount).map((item: any) => {
            const cryptoItem: CryptoItem = {
              id: parseInt(item.id),
              crypto: item.crypto,
              price: formatPrice(item.price),
              change: formatChange(item.change),
            };

            return (
              <React.Fragment key={item.id}>
                <tr>
                  <td>{cryptoItem.id}</td>
                  <td className='crypto'>
                    <Image src={Image1} alt='' width={32} height={32}/>
                    {cryptoItem.crypto}
                  </td>
                  <td>{cryptoItem.price}</td>
                  <td>{cryptoItem.change}</td>
                  <td className='trade'>
                    <Button.Root>
                      <Button.Text text='Buy'/>
                    </Button.Root>
                  </td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>

      <ActionView>
        <Button.Root onClick={toggleShowAllRows}>
          {showAllRows ? <Button.Text text='View Less'/> : <Button.Text text='View More'/>}
          <IoAddOutline size={12}/>
        </Button.Root>
      </ActionView>
    </DataTableContainer>
  )
}
