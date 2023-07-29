'use client'

import { createGlobalStyle } from "styled-components";

import { colors } from './color'
import { xs, sm, md, lg, xl } from './responsiveStyles'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body{
    width: 100%;
    height: 100%;
    background-color: ${colors.white};
  }

  a {
    text-decoration: none;
    color: inherit;
  
  }

  .react-modal-overlay, .react-big-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    min-height: 365px;
    width: 448px;
    background: #FFFFFF;
    padding: 2rem;
    position: relative;
    border-radius: 8px;
    outline: none;

    ${md`
      width: 320px;
    `}
    ${sm`
      width: 272px;
    `}
    ${xs`
      width: 272px;
    `}
  }

  .react-modal-close {
    position: absolute;
    right: 1rem;
    top: 1rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  /* .css-1d3m185-Muipopper-root-MuiTooltip-popper{
    background: #FBAB34;
  } */
  css-1k51tf5-MuiTooltip-tooltip{
    color: #FFF;
    padding: 8px 24px;
    background: #FBAB34;
  }
`