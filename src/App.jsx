import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import { MainReg } from './Register/mainReg';
import { MainLog } from './logIn/MainLog';
import landinPage from './LandinPage';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={landinPage} />
          <Route path="/landinPage.html" Component={HomePage} />
          <Route path="/Register.html" Component={MainReg} />
          <Route path="/Login.html" Component={MainLog} />
        </Routes>
      </Router>
    </>
  )
}

export default App
