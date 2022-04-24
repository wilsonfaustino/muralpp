/* eslint-disable import/export */
import { ReactElement } from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import { RenderResult, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { theme } from '~/styles'

const customRender = (ui: ReactElement): RenderResult =>
  render(ui, {
    wrapper: ({ children }) => (
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    ),
  })

export * from '@testing-library/react'
export { customRender as render, userEvent }
