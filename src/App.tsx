import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import {TransactionProvider} from "./TransactionContext";

function App() {
  return (
    <TransactionProvider>
      <Home />
      <GlobalStyle />
    </TransactionProvider>
  );
}

export default App;
