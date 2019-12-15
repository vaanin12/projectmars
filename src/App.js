import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/common/header';
import Footer from './components/common/footer';
import Firms from './components/firmsList';
import { getFirms } from './services/fakeApiService';
import "bootswatch/dist/sandstone/bootstrap.min.css";
import './App.css';

function App() {
      return (
          <div>  
              <div className="container">
                <Header /> 
                <Firms />
                <Footer />
              </div>
          </div>
      );
    }
export default App;
