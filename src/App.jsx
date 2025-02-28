import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import { MainReg } from './Register/MainReg';
import { MainLog } from './logIn/MainLog';
import LandinPage from './LandinPage';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandinPage />} />
          <Route path="/landinPage" element={<HomePage />} />
          <Route path="/Register" element={<MainReg />} />
          <Route path="/Login" element={<MainLog />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
