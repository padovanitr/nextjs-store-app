import { storeColors } from '@/utils/colors'
import { styled } from 'styled-components'

export const SearchbarContainer = styled.div`
  display: block;
`

export const Form = styled.form`
  color: #555;
  display: flex;
  padding: 2px;
  border: 1px solid ${storeColors.mediumGray};
  border-radius: 8px;
  width: 500px;
`

export const SearchInput = styled.input`
  border: none;
  background: transparent;
  margin: 0;
  padding: 9px 8px;
  font-size: 14px;
  color: inherit;
  border: 1px solid transparent;
  border-radius: 8px;
  width: 100%;
  outline: none;

  &::placeholder {
    color: #bbb;
  }
`

export const SearchButton = styled.button`
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  padding: 5px 10px;
  margin-right: 10px;
  cursor: pointer;
`
