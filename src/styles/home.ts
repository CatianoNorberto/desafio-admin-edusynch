import styled from 'styled-components';

import BackgroundImg from '../assets/images/backgroundImg.svg'

import { colors } from '../styles/color'
import { sm, md, lg, xl } from '../styles/responsiveStyles';

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
  }
`
export const ContentGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`
export const Group = styled.div`
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
`

export const BannerCarrousel = styled.div`

`
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
export const AnnouncementContents = styled.div`
  width: 100%;
  height: 718px;
  max-width: 76rem;
  margin: auto;
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
`
export const CardsContents = styled.div`
  width: 696px;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`
export const CardTop = styled.div`
  display: flex;
  gap: 16px;
`
export const CardBottom = styled.div`
  display: flex;
  gap: 16px;

  position: absolute;
  top: 300px;
  left: 106px;
`
export const AnnouncementDetails = styled.div`
  width: 406px;
  height: 100%;
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 260px;
  left: 718px;

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
`
export const TableView = styled.div`
  width: 100%;
  height: 100%;
`
export const TableViewContents = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  max-width: 76rem;
  padding-top: 100px;
  padding-bottom: 100px;
`
export const Newsletter = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(97.85deg, #FBAB34 -5.87%, #AD721A 118.06%);
`
export const NewsletterContents = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  max-width: 64rem;
  padding-top: 100px;
  padding-bottom: 100px;

  display: flex;
  justify-content: space-between;
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
  span{
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: ${colors.white};
  }
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
`;