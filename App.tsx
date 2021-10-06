import React from 'react'
import Navigate from 'common/navigation'
import { ThemeProvider } from 'styled-components/native'
import { defaultTheme } from 'uikit/styles/themes'

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Navigate />
    </ThemeProvider>
  )
}

export default App
