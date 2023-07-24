'use client'

import Image from 'next/image'

import Propriety1 from '../assets/images/Property1.svg'
import BackgroundImg from '../assets/images/backgroundImg.svg'

import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { colors } from '../styles/color'

import { 
  HomeContainer, 
  BannerContents,
  Contents,
  ContentGroup,
  BannerCarrousel,
  BannerBackground,
  Announcement,
  AnnouncementContents,
  CardsContents,
  CardTop,
  CardBottom,
  AnnouncementDetails
} from '../styles/home'

export default function Home() {
  return (
    <HomeContainer>
      <BannerContents>
        <Contents>
          <h1>Lorem ipsum dolor sit amet, consectetur</h1>
          <h4>Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit ut aliquam, purus sit amet luctus venenatis, 
            lectus magna fringilla urna, porttitor
          </h4>
          <Button.Root 
            border='none' 
            background={colors.primary500} 
            color={colors.white} 
            hoverEffect={true}
          >
            <Button.Text text='Sign up now now'/>
          </Button.Root>
          <ContentGroup>
            <div className='group'>
              <h5>Cryptos</h5>
            </div>
            <div className='group'>
              <h5>NFTs</h5>
            </div>
            <div className='group'>
              <h5>Games</h5>
            </div>
          </ContentGroup>
        </Contents>
        <BannerCarrousel>
          <Image src={Propriety1} alt='' width={384} height={499}/>
        </BannerCarrousel>
      </BannerContents>
      <BannerBackground>
        <Image src={BackgroundImg} alt='' />
      </BannerBackground>
      <Announcement>
        <AnnouncementContents>
          <CardsContents>
            <CardTop>
              <Card 
                image=''
                title=''
                subtitle=''
                about=''
              />
              <Card 
                image=''
                title=''
                subtitle=''
                about=''
              />
            </CardTop>
            <CardBottom>
              <Card 
                image=''
                title=''
                subtitle=''
                about=''
              />
              <Card 
                image=''
                title=''
                subtitle=''
                about=''
              />
            </CardBottom>
          </CardsContents>
          <AnnouncementDetails>
            <h5>Lorem ipsum</h5>
            <h2>Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, 
              purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
            </p>
            <Button.Root 
              border='none' 
              background={colors.primary500} 
              color={colors.white} 
              hoverEffect={true}
            >
              <Button.Text text='Sign up now now'/>
            </Button.Root>
          </AnnouncementDetails>
        </AnnouncementContents>
      </Announcement>
    </HomeContainer>
  )
}
