import { TransactionProvider } from './hooks/useTransactions'
import { Home } from './pages/home'
import { GlobalStyle } from './styles'

export function App() {
  return (<TransactionProvider>
    <Home />
    <GlobalStyle />
  </TransactionProvider>)
}

