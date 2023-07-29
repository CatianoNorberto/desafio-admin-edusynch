'use client'

import { useState } from "react";
import { BsPerson } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordLine } from 'react-icons/ri'
import { useForm } from 'react-hook-form'

import Link from 'next/link'
import Image from 'next/image'

import { Form, Input } from "@rocketseat/unform";

import { NewModal } from '../../components/Modal'
import Logo from '../../assets/images/logo.svg'
import Showhide from '../../assets/images/showhide.svg'
import Block from '../../assets/images/block.svg'
import Person from '../../assets/images/person.svg'
import Email from '../../assets/images/email.svg'
import { Button } from '../Button'

import { 
  Container,
  Contents,
  HeaderTop,
  HeaderBottom,
  GroupNumber,
  HeaderLeft,
  HeaderRight,
  CoinCarrousel,
  HeaderAction,
  ModalContainer,
  FormContent,
  Privacy,
  ModalAction,
  FormShowhide
} from './style'

const navLinks = [
  {
    title: 'Abut us',
    path: '/',
  },
  {
    title: 'Top Cryptos',
    path: '/',
  }
]

export default function Header() {
  const { register, handleSubmit } = useForm()
  const [ isOpenModal, setIsOpenModal] = useState(false)
  const [ isOpenSignIn, setIsOpenSigIn] = useState(false)
  const [ checkpassword, setCheckPassword] = useState("password")
  const [ checkpasswordConfirmation, setCheckPasswordConfirmation] = useState("confirmPassword")

  const handleShowPassword = (e: any) =>{
    if(checkpassword === "password"){
      setCheckPassword("text")
    }else{
      setCheckPassword("password")
    }
  }

  const handleShowPasswordConfirmation = (e: any) =>{
    if(checkpasswordConfirmation === "password"){
      setCheckPasswordConfirmation("text")
    }else{
      setCheckPasswordConfirmation("password")
    }
  }
  const toggleModalSignUp = () => {
    setIsOpenModal(!isOpenModal)
  }

  const toggleModalSignIn = () => {
    setIsOpenSigIn(!isOpenSignIn)
  }

  const handleSignIn = (data: any) => {
    console.log(data)
  }
  const handleSignUp = (data: any) => {
    console.log(data)
  }

  return (
    <>
    <NewModal 
      isOpen={isOpenSignIn}
      onClose={toggleModalSignIn}
    >
      <ModalContainer>
        <h4>Sign in to <span>Coin</span>Synch</h4>
        <Form 
          onSubmit={handleSubmit(handleSignIn)}
        >
          <FormContent>
            <label>
              <Image src={Email} alt='email' width={24} height={24}/>
            </label>
            <Input 
              type="email"
              id="email"
              placeholder="Email"
              {...register('email')}
            />
          </FormContent>
          <FormContent>
            <label>
              <Image src={Block} alt='block' width={24} height={24}/>
            </label>
            <Input 
              type={checkpassword}
              id="password"
              placeholder="Password"
              {...register('password')}
            />
            <FormShowhide>
              <Button.Root 
                onClick={handleShowPassword}
              >
                <Image src={Showhide} alt='showhide'/>
              </Button.Root>
            </FormShowhide>
          </FormContent>
          <Link href='/'>Forgot password?</Link>
        </Form>
        <ModalAction>
          <Button.Root type="submit">
            <Button.Text text='Sign in'/>
          </Button.Root>
          <label>Don’t have an account? <Link onClick={toggleModalSignUp} href=''>Sign up to</Link> <span>Coin</span>Synch</label>
        </ModalAction>
      </ModalContainer>
    </NewModal>
    <NewModal 
      isOpen={isOpenModal}
      onClose={toggleModalSignUp}
    >
      <ModalContainer>
        <h4>Sign up to <span>Coin</span>Synch</h4>
        <Form onSubmit={handleSubmit(handleSignUp)}>
          <FormContent>
            <label>
              <Image src={Person} alt='person' width={24} height={24}/>
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
              <Image src={Email} alt='email' width={24} height={24}/>
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
              <Image src={Block} alt='block' width={24} height={24}/>
            </label>
            <Input 
              type={checkpassword}
              name="password"
              id="password"
              placeholder="Password"
            />
            <FormShowhide>
              <Button.Root 
                onClick={handleShowPassword}
              >
                <Image src={Showhide} alt='showhide'/>
              </Button.Root>
            </FormShowhide>
          </FormContent>
          <FormContent>
            <label>
              <Image src={Block} alt='block' width={24} height={24}/>
            </label>
            <Input 
              type={checkpasswordConfirmation}
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
            />
            <FormShowhide>
              <Button.Root
                onClick={handleShowPasswordConfirmation}
              >
                <Image src={Showhide} alt='showhide'/>
              </Button.Root>
            </FormShowhide>
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
          <label>Already have and account? <Link onClick={toggleModalSignIn} href=''>Sign in to</Link> <span>Coin</span>Synch</label>
        </ModalAction>
      </ModalContainer>
    </NewModal>
      <Container>
        <Contents>
          <HeaderTop>
            <HeaderLeft>
              <Image src={Logo} alt='' width={125} height={40} />
              <div className="headerlink">
                {navLinks.map((item) => (
                  <Link
                    color="inherit"
                    key={item.title}
                    href={item.path}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </HeaderLeft>
            <HeaderRight>
              <HeaderAction>
                <div className="signIn">
                  <Button.Root
                    onClick={toggleModalSignIn}
                  >
                    <Button.Text text='Sign in'/>
                  </Button.Root>
                </div>
                <Button.Root 
                  onClick={toggleModalSignUp}
                >
                  <Button.Text text='Sign up'/>
                </Button.Root>
              </HeaderAction>
            </HeaderRight>
          </HeaderTop>
          <HeaderBottom>
            <CoinCarrousel>
              <GroupNumber>
                <p>BIT <span>R$ 23,62 </span> <strong>+7,082</strong></p>
                <p>BIT <span>R$ 23,62 </span> <strong>+7,082</strong></p>
                <p>BIT <span>R$ 23,62 </span> <strong>+7,082</strong></p>
                <p>BIT <span>R$ 23,62 </span> <strong>+7,082</strong></p>
                <p>BIT <span>R$ 23,62 </span> <strong>+7,082</strong></p>
                <p>BIT <span>R$ 23,62 </span> <strong>+7,082</strong></p>
              </GroupNumber>
            </CoinCarrousel>
          </HeaderBottom>
          
        </Contents>
      </Container>
    </>
  )
}