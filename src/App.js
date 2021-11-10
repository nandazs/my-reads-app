
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import HeaderComponent from './components/Header';
import FooterComponent from './components/Footer';
import Main from './components/Main';
import 'antd/dist/antd.css';
import './pages/style.css';
import './components/styles.css';
import { Layout } from 'antd';

export function App() {
  return(
      <Layout>
        <BrowserRouter>
          <HeaderComponent/>
            <Main/>
            <FooterComponent/>
        </BrowserRouter>
      </Layout>
  );
}