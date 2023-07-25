'use client'

interface ButtonTextProps{
  text: string
}

export default function ButtonText({text}: ButtonTextProps){
  // const textStyle = {
  //   color: '#FFF', 
  // };

  return (
    <p>{text}</p>
  )
}
