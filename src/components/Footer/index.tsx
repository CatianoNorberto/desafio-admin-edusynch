import React from 'react'
import Image from 'next/image'

import Logo from '../../assets/images/logo.svg'

import {
  FooterContainter,
  FooterContents,
  FooterCopyRight
} from './style'

export default function Footer() {
  return (
    <FooterContainter>
      <FooterContents>
        <FooterCopyRight>
          <p>
            Copyright &copy; 2022 -  All rights reserved
          </p>
        </FooterCopyRight>
        <Image src={Logo} alt='' width={94} height={16}/>
      </FooterContents>
    </FooterContainter>
  )
}