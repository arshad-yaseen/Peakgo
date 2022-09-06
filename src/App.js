import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom'
import ViewMore from './pages/ViewMore';
import MoreInformation from './pages/MoreInformation';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:name/viewmore/:category/:type/:page' element={<ViewMore />} />
        <Route path='/moreinfo/:id' element={<MoreInformation />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
