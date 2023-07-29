import styled from 'styled-components';

import BackgroundImg from '../assets/images/backgroundImg.svg'

import { colors } from '../styles/color'
import { xs, sm, md, lg, xl } from '../styles/responsiveStyles';

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  
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

export const ModalContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: relative;

  h4{
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    color: ${colors.secundary500};

    span{
      color: ${colors.primary500};
    }
  }

  form {
    width: 100%;
    padding: 20px 0;
    
    label{
      position: absolute;
      left: 16px;
      color: ${colors.secundary300};
    }

    input {
      width: 100%;
      padding: 16px 32px 16px 48px;
      line-height: 24px;
      font-size: 16px;
      color: ${colors.textbase};
      background: ${colors.white};
      border-radius: 8px;
      border: 1px solid ${colors.secundary300};
    }
  }
`
export const FormContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
export const Privacy = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 20px;

  >input{
    width: 16px;
    height: 16px;
    border-radius: 4px;
    border: 1px solid ${colors.primary500};
  }

  label{
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    color: ${colors.textbase};
    span{
      font-weight: 900;
    }
  }
`
export const ModalAction = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;

  >button{
    border: none;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    padding: 14px 24px;
    border-radius: 32px;
    margin-bottom: 20px;
    color:${colors.white};
    background:${colors.primary500};
  }

  label{
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    color: ${colors.textbase};
    a{
      font-weight: 900;
    }

    span{
      color: ${colors.primary500};
    }
  }
`
export const BannerContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const Contents = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 0 32px;

  ${xl`
    max-width: 1216px;
  `}
  ${lg`
    max-width: 1024px;
  `}
  ${md`
    max-width: 768px;
  `}
  ${sm`
    max-width: 480px;
  `}
  ${xs`
    max-width: 320px;
  `}
`
export const ContentsLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 590px;
  height: 100%;

  h1{
    font-size: 48px;
    font-weight: 700;
    line-height: 56px;
    letter-spacing: -1%;
    color: ${colors.primary500};

    margin-bottom: 20px;
    ${md`
      font-size: 32px;
      line-height: 40px;
    `}
    ${sm`
      font-size: 20px;
      line-height: 32px;
    `}
    ${xs`
      font-size: 20px;
      line-height: 32px;
    `}
  }

  h4{
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
    color: ${colors.textbase};

    margin-bottom: 20px;
    ${md`
      font-size: 16px;
      line-height: 24px;
    `}
  }

  button{
    width: 278px;
    border: none;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    padding: 14px 24px;
    border-radius: 32px;
    margin-bottom: 40px;
    color:${colors.white};          
    text-transform: uppercase;
    background:${colors.primary500};
    
    gap: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    ${md`
      width: 232px;
    `}
    ${sm`
      width: 180px;
      font-size: 14px;
      line-height: 16px;
    `}
    ${xs`
      width: 180px;
      font-size: 14px;
      line-height: 16px;
    `}
  }

  ${md`
    width: 320px;
  `}
  ${sm`
    width: 100%;
    margin-top: 50px;
    text-align: center;
    align-items: center;
    justify-content: center;
  `}
  ${xs`
    width: 100%;
    margin-top: 50px;
    text-align: center;
    align-items: center;
    justify-content: center;
  `}
`
export const ContentGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`
export const Group = styled.div`
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
    color: ${colors.primary500};

    ${sm`
      font-size: 12px;
      line-height: 16px;
    `}
    ${xs`
      font-size: 12px;
      line-height: 16px;
    `}
  }
`

export const BannerCarrousel = styled.div`
  /* width: 40%; */
  height: 100%;
  ${sm`
    display: none;
  `}
  ${xs`
    display: none;
  `}
`
export const BannerBackground = styled.div`
  width: 100%;
  height: 100%;

  img{
    width: 100%;
    height: 100%;
  }

  /* background: url(${BackgroundImg?.src}); */
`
export const Announcement = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #F7F7F7 100%);
;
`
export const AnnouncementContents = styled.div`
  width: 100%;
  height: 718px;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 80px;
  padding-left: 32px;
  padding-right: 32px;
  gap: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${xl`
    max-width: 1216px;
  `}
  ${lg`
    max-width: 1024px;
  `}
  ${md`
    height: 994px;
    max-width: 768px;
    flex-direction: column-reverse;
  `}
  ${sm`
    max-width: 480px;
  `}
  ${xs`
    max-width: 320px;
  `}
`
export const CardsContents = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`
export const CardTop = styled.div`
  display: flex;
  gap: 16px;
`
export const CardBottom = styled.div`
  gap: 16px;
  display: flex;
  margin-left: 120px;
  margin-top: 45px;
`
export const AnnouncementDetails = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 260px;
  margin-right: 220px;

  h5{
    font-size: 20px;
    font-weight: 700;
    line-height: 32px;
    margin-bottom: 0.5rem;
    color: ${colors.primary500};
  }

  h2{
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    margin-bottom: 20px;

    color: ${colors.textbase};
  }

  span{
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin-bottom: 30px;
    color: ${colors.textbase};
  }

  ${xl`
    margin-right: 0;
  `}
  ${md`
    margin-top: 0;
    width: 494px;
  `}
  ${sm`
    // margin-top: 0;
    width: 268px;
  `}
  ${xs`
    // margin-top: 0;
    width: 268px;
  `}
`
export const AnnouncementAction = styled.div`
  button{
    width: 176px;
    border: none;
    padding: 14px 24px;
    border-radius: 32px;
    background:${colors.primary500};

    p{
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      color: ${colors.white};
    }
  }

  ${md`
    display: none;
  `}
`
export const TableView = styled.div`
  width: 100%;
  height: 100%;
`
export const TableViewContents = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 1440px;
  padding-top: 100px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 100px;

  ${xl`
    max-width: 1216px;
  `}
  ${lg`
    max-width: 1024px;
  `}
  ${md`
    max-width: 768px;
  `}
  ${sm`
    max-width: 480px;
  `}
  ${xs`
    max-width: 320px;
  `}
`
export const Newsletter = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(97.85deg, #FBAB34 -5.87%, #AD721A 118.06%);
`
export const NewsletterContents = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 1216px;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: 32px;
  padding-right: 32px;
  gap: 30px;
  display: flex;
  justify-content: space-between;

  ${lg`
    max-width: 1024px;
  `}
  ${md`
    max-width: 768px;
  `}
  ${sm`
    max-width: 480px;
    flex-direction: column;
  `}
  ${xs`
    max-width: 320px;
    flex-direction: column;
  `}
`;
export const NewsletterLeft = styled.div`
  width: 385px;
  display: flex;
  flex-direction: column;

  h4{
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    margin-bottom: 0.5rem;
    color: ${colors.primary200};
  }
  h2{
    font-size: 40px;
    font-weight: 700;
    line-height: 32px;
    margin-bottom: 0.5rem;
    color: ${colors.white};
  }
  p{
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: ${colors.white};
  }

  ${md`
    width: 100%;
  `}
  ${sm`
    width: 100%;
  `}
  ${xs`
    width: 100%;
  `}
`
export const NewsletterForm = styled.div`
  width: 384px;

  label{
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
    color: ${colors.white};
    margin-bottom: 20px;

    input{
      width: 100%;
      padding: 16px;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      color: ${colors.secundary400};
      background: ${colors.white};
      border-radius: 4px;
      border: none;
      box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.1);
    }
  }

  button{
    width: 100%;
    border: none;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    padding: 14px 24px;
    border-radius: 32px;
    color:${colors.white};          
    background:${colors.primary500};
    box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.1);
  }

  ${md`
    width: 100%;
  `}
  ${sm`
    width: 100%;
  `}
  ${xs`
    width: 100%;
  `}
`;