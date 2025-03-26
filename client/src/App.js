import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Footer from "./components/Footer";
import BottomBanner from "./components/BottomBanner";
import NikeBanner from "./components/NikeBanner";
import BoxSection from "./components/BoxSection";
import Banner from "./components/Banner";
import MidSection from "./components/MidSection";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import WomenPage from "./pages/WomenPage";  // New WomenPage
import MenPage from "./pages/MenPage";      // New MenPage
import WishlistPage from "./pages/Wishlist"; // New WishlistPage
import CartPage from "./pages/Cart";  // New CartPage
import axios from "axios";

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get('http://localhost:5001/api/auth/user', { withCredentials: true });
                if (res.data.user) {
                    setUser(res.data.user);
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchUser();
    }, []);

    const handleLogout = async () => {
        try {
            await axios.get('http://localhost:5000/api/auth/logout', { withCredentials: true });
            setUser(null);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Router>
            <div style={{ background: 'white', color: 'black' }}>
                <Navbar user={user} onLogout={handleLogout} />
                <Routes>
                    <Route path="/" element={
                        <>
                            <Banner />
                            <MidSection />
                            <BoxSection />
                            <NikeBanner />
                            <BottomBanner />
                            <Footer />
                        </>
                    } />
                    <Route path="/login" element={<Login setUser={setUser} />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/women" element={<WomenPage />} />  {/* Route for WomenPage */}
                    <Route path="/men" element={<MenPage />} />      {/* Route for MenPage */}
                    <Route path="/wishlist" element={<WishlistPage />} /> {/* Route for WishlistPage */}
                    <Route path="/cart" element={<CartPage />} />   {/* Route for CartPage */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
