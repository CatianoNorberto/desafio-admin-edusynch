'use client'

import Link from 'next/link'
import Image from 'next/image'

import Logo from '../../assets/images/logo.svg'
import { colors } from '../../styles/color'
import { Button } from '../Button'

import { 
  Container,
  Contents,
  HeaderAction
} from './style'

export default function Header() {
  return (
    <Container>
      <Contents>
        <Image src={Logo} alt='' width={125} height={40} />
        <HeaderAction>
          <h2>Lorem</h2>
        </HeaderAction>
      </Contents>
    </Container>
  )
}
