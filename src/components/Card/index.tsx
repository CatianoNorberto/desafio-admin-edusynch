'use client'

import Image from "next/image";

import {
  Container,
  Contents,
  CardeImage,
  Description,
} from "./style";

interface Props {
  image: string;
  title: string;
  subtitle: string;
  about: string;
}

export const Card = ({ image, title, subtitle, about }: Props) => {

  return (
    <Container>
      <Contents>
        <CardeImage>
          <Image src={image} alt="" width={64} height={64}/>
        </CardeImage>
        <Description>
          <h3>{title}</h3>
          <h4>{subtitle}</h4>
          <p>{about}</p>
        </Description>
      </Contents>
    </Container>
  );
};
