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
import Outline from '../../assets/images/outline.svg'
import { NewModal } from '../Modal'
import { Button } from '../Button'

import { 
  Container,
  Contents,
  HeaderLeft,
  HeaderRight,
  Perfil,
  PerfilData,
  Userperfil,
  ModalContainer,
  FormContent,
  Privacy,
  ModalAction
} from './style'

const user = {
  name: 'Aluno',
  avatarUrl: Avatar
}

export default function Header() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const toggleModal = () => {
  setIsOpenModal(!isOpenModal)
  }

  const handleTogglePerfil = () => {
    setIsVisible(!isVisible);
  };

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
            {user && (
              <Perfil>
                <Userperfil onClick={handleTogglePerfil}>
                  <Image src={user.avatarUrl} alt='user' width={32} height={32}/>
                  <span>{user.name}</span>
                  <PerfilData isVisible={true}>
                  <li>
                    <Image src={Outline} alt='Outline' width={16} height={16}/>
                    logout
                  </li>
                  </PerfilData>
                </Userperfil>
              </Perfil>
            )}
          </HeaderRight>
        </Contents>
      </Container>
    </>
  )
}