import styled from 'styled-components'
import {BiSearchAlt} from 'react-icons/bi'

export const CoinApp = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--crl-light);
  padding: 20px;

`

export const CoinSearch = styled.div`


  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 64px auto;
  position: relative;


`

export const CoinH1 = styled.h1`

  margin-bottom: 32px;
  text-align: center;
  font-size: var(--fs-title);

`

export const CoinInput = styled.input`

 
  width: 300px;
  height: 50px;
  border-radius: 4px;
  border: none;
  color: var(--crl-light);

  &::placeholder{

    color: var(--crl-light);
  }

`

export const SearchBox = styled.div`

  margin-top: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);


`

export const Input = styled.input`

  padding: 10px;
  width: 50px;
  height: 50px;
  background: none;
  border: 4px solid var(--clr-secondary);
  border-radius: 50px;
  box-sizing: border-box;
  font-size: var(--fs-text);
  color: var(--clr-light);
  outline: none;
  transition: .5s;

  &:hover{

      width: 350px;
      background: transparent;
      border-radius: 10px;
  }

`

export const SearchIcon = styled(BiSearchAlt)`


  position: absolute;
  top: 50%;
  right: 7px;
  transform: translate(-50%, -50%);
  font-size: var(--fs-icon);
  color: var(--clr-secondary);
  transition: .2s;


  &:hover{

      opacity: 0;
      z-index: -1;
  }



`

