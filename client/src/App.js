import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import MidSection from './components/MidSection';
import BoxSection from './components/BoxSection';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {
    return (
        <div style={{ background: 'white', color: 'black' }}>
            <Navbar />
            <Banner />
            <MidSection />
            <BoxSection />
            <Footer />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                {/* Add more routes as needed */}
            </Routes>
        </div>
    );
};

export default App;
