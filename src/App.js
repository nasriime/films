import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.scss';
import List from "./components/List/List";
import Details from './components/Details/Details';
import MainContextProvider from './contexts';

function App() {
  return (
    <MainContextProvider>
       <BrowserRouter>
          <Routes>
              <Route path="/" element={<List />} />
              <Route path="/details" element={<Details />} />
          </Routes>
        </BrowserRouter>
    </MainContextProvider>
  );
}

export default App;
