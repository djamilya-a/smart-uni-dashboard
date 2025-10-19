import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import Materials from './components/Materials';
import Schedule from './components/Schedule';
import Regis from './pages/Regis'
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/materials' element={<Materials />} />
          <Route path='/regis' element={<Regis />} />
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App