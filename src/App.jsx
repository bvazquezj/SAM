import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import { MainReg } from './Register/MainReg.jsx';
import { MainLog } from './logIn/MainLog.jsx';
import landinPage from './LandinPage.jsx';

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
