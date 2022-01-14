import './App.scss';
import List from "./components/List/List";
import MainContextProvider from './contexts';

function App() {
  return (
    <MainContextProvider>
      <List />
    </MainContextProvider>
  );
}

export default App;
