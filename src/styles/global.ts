'use client'

import { createGlobalStyle } from "styled-components";

import { colors } from './color'

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

  /* .main{
    width: 100%;
    max-width: 90rem;
    display: flex;
    flex-direction: column;
  } */

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

    @media only screen and (max-width: 480px){
      width: 90%;
    }
  }

  .react-big-modal-content {
    width: 100%;
    max-width: 448px;
    background: #f5f5f5;
    padding: 2rem;
    position: relative;
    border-radius: 8px;
    border-top: 5px solid #0083ff;
    outline: none;
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
`