import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import PicCarousel from './features/carousel/PicCarousel';
import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import CalendarPage from './pages/CalendarPage';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/shop' element={<ShopPage />} />
                <Route path='/calendar' element={<CalendarPage />} />
            </Routes>
            {/* I'm ready for workshop */}
            <Footer />
        </div>
    );
}

export default App;