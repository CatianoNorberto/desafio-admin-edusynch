'use client'

import React, { useState } from "react";
import Image from 'next/image'
import { IoAddOutline } from 'react-icons/io5'

import { Form, Input, Select } from "@rocketseat/unform";

import { NewModal } from '../../components/Modal'
import { Button } from '../../components/Button'

import Image1 from '../../assets/images/image1.svg'
import Group from '../../assets/images/group.svg'
import Payments from '../../assets/images/payments.svg'

import { 
  DataTableContainer,
  ActionView, 
  DataTableHeader,
  HeaderLeft,
  ModalContainer,
  FormContent,
  ModalAction 
} from './style'

const DataSelect = [
  {name: 'Facebook', value: 'facebook'},
  {name: 'Facebook', value: 'facebook'},
  {name: 'Facebook', value: 'facebook'},
  {name: 'Facebook', value: 'facebook'},
]

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
  const [isOpenModal, setIsOpenModal] = useState(false)
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
  const toggleModal = () => {
    setIsOpenModal(!isOpenModal)
  }

  const handleSubmit = async () => {}
  return (
    <>
      <NewModal 
        isOpen={isOpenModal}
        onClose={toggleModal}
      >
        <ModalContainer>
          <h4>Add Crypto</h4>
          <Form onSubmit={handleSubmit}>
            <FormContent>
              <Select
                name="choose"
                id="choose"
                placeholder="Choose Crypto"
                options={DataSelect.map((data) => {
                  return {
                    id: data.value,
                    title: data.name,
                  };
                })}
              />
            </FormContent>
            <FormContent>
              <Input 
                type="number"
                name="number"
                id="number"
                placeholder="0,00"
              />
            </FormContent>
          </Form>
          <ModalAction>
            <Button.Root>
              <Button.Text text='Add Crypto'/>
            </Button.Root>
          </ModalAction>
        </ModalContainer>
      </NewModal>
      <DataTableContainer>
        <DataTableHeader>
          <HeaderLeft>
            <Image src={Group} alt='' width={32} height={32}/>
            <h4>My Wallet</h4>
          </HeaderLeft>
          <Button.Root
            onClick={toggleModal} 
          >
            <IoAddOutline size={12}/>
            <Button.Text text='Add crypto'/>
          </Button.Root>
        </DataTableHeader>
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
    </>
  )
}
