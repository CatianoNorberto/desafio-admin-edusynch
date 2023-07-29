'use client'
import { useState } from "react";
import { BsPerson } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordLine } from 'react-icons/ri'
import Image from 'next/image'
import Link from 'next/link'

import { Form, Input } from "@rocketseat/unform";

import Logo from '../assets/images/logo.svg'
import Arrowright from '../assets/images/right.svg'
import Propriety1 from '../assets/images/Property1.svg'
import BackgroundImg from '../assets/images/backgroundImg.svg'

import { Card } from '../components/Card'
import { Button } from '../components/Button'
import DataTable from '@/components/DataTable'
import Header  from '../components/Header'
import Footer  from '../components/Footer'
import { NewModal } from '../components/Modal'

import { cardCurrency, cardBisnessComputer} from '../data'

import { 
  HomeContainer,
  ModalContainer,
  FormContent,
  Privacy,
  ModalAction, 
  BannerContainer,
  Contents,
  ContentsLeft,
  ContentGroup,
  Group,
  BannerCarrousel,
  BannerBackground,
  Announcement,
  AnnouncementContents,
  CardsContents,
  CardTop,
  CardBottom,
  AnnouncementDetails,
  AnnouncementAction,
  TableView,
  TableViewContents,
  Newsletter,
  NewsletterContents,
  NewsletterLeft,
  NewsletterForm
} from '../styles/home'

export default function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  
  const toggleModal = () => {
  setIsOpenModal(!isOpenModal)
  }

  const handleSubmitModal = async () => {}
  
  const handleSubmit = async () => {}

  return (
    <>
      <NewModal 
        isOpen={isOpenModal}
        onClose={toggleModal}
      >
      <ModalContainer>
        <h4>Sign in to <span>Coin</span>Synch</h4>
        <Form onSubmit={handleSubmitModal}>
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
      <HomeContainer>
        <Header/>
        <BannerContainer>
          <Contents>
            <ContentsLeft>
              <h1>Lorem ipsum dolor sit amet, consectetur</h1>
              <h4>Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit ut aliquam, purus sit amet luctus venenatis, 
                lectus magna fringilla urna, porttitor
              </h4>
              <Button.Root
                onClick={toggleModal}
              >
                <Button.Text text='Sign up now now'/>
                <Image src={Arrowright} alt='arrow image' width={12} height={12}/>
              </Button.Root>
              <ContentGroup>
                <Group>
                  <h5>Cryptos</h5>
                </Group>
                <Group>
                  <h5>NFTs</h5>
                </Group>
                <Group>
                  <h5>Games</h5>
                </Group>
              </ContentGroup>
            </ContentsLeft>
            <BannerCarrousel>
              <Image src={Propriety1} alt='' width={384} height={499}/>
            </BannerCarrousel>
          </Contents>
        </BannerContainer>
        <BannerBackground>
          <Image src={BackgroundImg} alt='' width={1440} height={247}/>
        </BannerBackground>
        <Announcement>
          <AnnouncementContents>
            <CardsContents>
              <CardTop>
                {cardCurrency.map(item => <Card key={item.id}
                  image={item.image}
                  title={item.title}
                  subtitle={item.subtitle}
                  about={item.about}
                />)}
              </CardTop>
              <CardBottom>
                {cardBisnessComputer.map(item => <Card key={item.id}
                  image={item.image}
                  title={item.title}
                  subtitle={item.subtitle}
                  about={item.about}
                />)}
              </CardBottom>
            </CardsContents>
            <AnnouncementDetails>
              <h5>Lorem ipsum</h5>
              <h2>Lorem ipsum</h2>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
              </span>
              <AnnouncementAction>
                <Button.Root
                  onClick={toggleModal}
                >
                  <Button.Text text='Sign up now now'/>
                </Button.Root>
              </AnnouncementAction>
            </AnnouncementDetails>
          </AnnouncementContents>
        </Announcement>
        <TableView>
          <TableViewContents>
            <DataTable/>
          </TableViewContents>
        </TableView>
        <Newsletter>
          <NewsletterContents>
            <NewsletterLeft>
              <h4>Lorem ipsum</h4>
              <h2>Lorem ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
                purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
              </p>
            </NewsletterLeft>
            <NewsletterForm>
              <Form onSubmit={handleSubmit}>
                <label htmlFor="">
                  Email
                  <Input 
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </label>
              </Form>
              <Button.Root>
                <Button.Text text='Subscribe'/>
              </Button.Root>
            </NewsletterForm>
          </NewsletterContents>
        </Newsletter>
        <Footer/>
      </HomeContainer>
    </>
  )
}
