import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import CalendarPage from './pages/CalendarPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path='' element={<HomePage />} />
                <Route path='/shop' element={<ShopPage />} />
                <Route 
                    path='/shop/:productId'
                    element={<ProductDetailPage />}
                />
                <Route path='/shop/cart' element={<CartPage />} />
                <Route path='/calendar' element={<CalendarPage />} />



                <Route path='/not-found' element={<NotFoundPage />} />
                <Route path='/*' element={<NotFoundPage />} /> {/* KEEP THIS ROUTE AT THE BOTTOM */}
            </Routes>
            <Footer />
        </div>
    );
}

export default App;