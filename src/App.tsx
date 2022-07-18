import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CyclescontextProvider } from './contexts/CyclesContext'
import { Router } from './Router'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/themes/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclescontextProvider>
          <Router />
        </CyclescontextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
