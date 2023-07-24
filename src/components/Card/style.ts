import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 280px;
  padding: 24px;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.05);
`

export const Contents = styled.div`
  

`
export const CardeImage = styled.div`
  

`

export const Description = styled.div`
  height: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;

  h3{
    margin-bottom: 1rem;
    font-size: 0.8125rem;
    font-weight: 600;
    color: #000;
  }

  h4{
    font-size: 0.75rem;
    margin-bottom: 2px;
    display: block;
  }

  p{

  }
`