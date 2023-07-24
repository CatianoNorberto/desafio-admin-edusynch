'use client'

interface ButtonTextProps{
  text: string
}

export default function ButtonText({text}: ButtonTextProps){
  return (
    <p>{text}</p>
  )
}
