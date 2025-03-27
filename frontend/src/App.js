import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import {Route, Routes } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
    return (
        <>
            <Header />
            <main>
                <Routes> {/* ✅ No need for Router here */}
                    <Route path='/' element={<HomeScreen />} exact />
                    <Route path='/login' element={<LoginScreen />} />
                    <Route path='/product/:id' element={<ProductScreen />} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;