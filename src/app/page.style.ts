import { storeColors } from '@/utils/colors'
import { styled } from 'styled-components'

export const AppContainer = styled.div`
  background-color: ${storeColors.white};
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`
