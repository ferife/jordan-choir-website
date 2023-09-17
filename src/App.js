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
    // TODO: About Us page(s)
    // TODO: (maybe) Contact Us Page. With form to submit feedback
    // TODO: GitHub.io does not allow for local storage, which means the shopping cart will not work. Look into using web hosting services such as Google FireBase
    // TODO: Create the ability for an administrator user to log in to change the content on the site.
    // TODO: Make sure the entire website looks good on phones and tablets, not just desktops
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/shop' element={<ShopPage />} />
                <Route 
                    path='/shop/:productId'
                    element={<ProductDetailPage />}
                />
                <Route path='/shop/cart' element={<CartPage />} />
                <Route path='/calendar' element={<CalendarPage />} />



                <Route path='/*' element={<NotFoundPage />} /> {/* KEEP THIS ROUTE AT THE BOTTOM */}
            </Routes>
            <Footer />
        </div>
    );
}

export default App;