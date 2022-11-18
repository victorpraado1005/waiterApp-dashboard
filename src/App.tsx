import { GlobalStyles } from './styles/GlobalStyles';

import { Header } from '../src/components/Header';
import { Orders } from './components/Orders';

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Orders />
    </>
  );
}
