import styled from 'styled-components';

import BackgroundImg from '../assets/images/backgroundImg.svg'

import { colors } from '../styles/color'
import { sm, md, lg, xl } from '../styles/responsiveStyles';

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 64px;

  /* ${xl`
    grid-template-columns: repeat(3, 1fr);
  `}

  ${lg`
    grid-template-columns: repeat(2, 1fr);
  `}
  ${md`
    grid-template-columns: repeat(1, 1fr);
  `}
  ${sm`
    grid-auto-rows: minmax(120px, auto);
  `} */
`;
export const BannerContents = styled.div`
  width: 100%;
  max-width: 76rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Contents = styled.div`
  width: 590px;
  height: 100%;

  h1{
    font-size: 48px;
    font-weight: 700;
    line-height: 56px;
    letter-spacing: -1%;
    color: ${colors.primary500};

    margin-bottom: 20px;
  }

  h4{
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
    color: ${colors.textbase};

    margin-bottom: 20px;
  }

  button{
    text-transform: uppercase;
    padding: 14px 24px;

    margin-bottom: 40px;
  }
`
export const ContentGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  .group{
    width: 101px;
    height: 40px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${colors.primary100};
    padding: 4px 16px;

    h5{
      font-size: 20px;
      font-weight: 400;
      line-height: 32px;
      color: ${colors.primary500}
    }
  }
`
export const BannerCarrousel = styled.div``
export const BannerBackground = styled.div`
  width: 100%;
  height: 100%;

  /* background: url(${BackgroundImg?.src}); */
`
export const Announcement = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #F7F7F7 100%);
;
`
export const AnnouncementContents = styled.div``
export const CardsContents = styled.div``
export const CardTop = styled.div``
export const CardBottom = styled.div``
export const AnnouncementDetails = styled.div``
