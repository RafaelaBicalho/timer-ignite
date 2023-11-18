import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button variant="secondary" />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  )
}
export default App