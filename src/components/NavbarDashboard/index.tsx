'use client'

import { useState } from "react";
import { BsPerson } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordLine } from 'react-icons/ri'
import Link from 'next/link'
import Image from 'next/image'

import { Form, Input } from "@rocketseat/unform";

import Logo from '../../assets/images/logo.svg'
import Avatar from '../../assets/images/avatar.svg'
import { NewModal } from '../Modal'
import { Button } from '../Button'

import { 
  Container,
  Contents,
  HeaderLeft,
  HeaderRight,
  HeaderAction,
  ModalContainer,
  FormContent,
  Privacy,
  ModalAction
} from './style'

export default function Header() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  
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
          <h4>Sign in to <span>Coin</span>Synch</h4>
          <Form onSubmit={handleSubmit}>
            <FormContent>
              <label>
                <BsPerson size={24}/>
              </label>
              <Input 
                type="name"
                name="name"
                id="name"
                placeholder="Name"
              />
            </FormContent>
            <FormContent>
              <label>
                <MdEmail size={24}/>
              </label>
              <Input 
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
            </FormContent>
            <FormContent>
              <label>
                <RiLockPasswordLine size={24}/>
              </label>
              <Input 
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </FormContent>
            <FormContent>
              <label>
                <RiLockPasswordLine size={24}/>
              </label>
              <Input 
                type="text"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
              />
            </FormContent>
          </Form>
          <Privacy>
            <input type="checkbox" name='privacy' id='privacy' />
            <label>I have read and accept the <span>Privacy Policy</span> and <span>Terms of User Sign up.</span></label>
          </Privacy>
          <ModalAction>
            <Button.Root>
              <Button.Text text='Sign up'/>
            </Button.Root>
            <label>Already have and account? <Link href=''>Sign in to</Link> <span>Coin</span>Synch</label>
          </ModalAction>
        </ModalContainer>
    </NewModal>
      <Container>
        <Contents>
          <HeaderLeft>
            <Image src={Logo} alt='' width={125} height={40} />
          </HeaderLeft>
          <HeaderRight>
            <HeaderAction>
              <Image src={Avatar} alt='user' width={32} height={32}/>
              <span>aluno</span>
            </HeaderAction>
          </HeaderRight>
        </Contents>
      </Container>
    </>
  )
}