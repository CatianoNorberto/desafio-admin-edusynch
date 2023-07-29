import React from 'react'
import Image from 'next/image'

import Logo from '../../assets/images/logo.svg'

import {
  FooterContainter,
  FooterContents,
  FooterCopyRight,
  FooterCopyLeft
} from './style'

export default function FooterDahboard() {
  return (
    <FooterContainter>
      <FooterContents>
        <FooterCopyRight>
          <p>
            Copyright &copy; 2022 -  All rights reserved
          </p>
        </FooterCopyRight>
        <FooterCopyLeft>
          <Image src={Logo} alt='' width={94} height={17}/>
        </FooterCopyLeft>
      </FooterContents>
    </FooterContainter>
  )
}