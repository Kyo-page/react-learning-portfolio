import { StrictMode } from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import { Portfolio } from './components/Portfolio.jsx';
import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { About } from './components/About.jsx';
import { Social } from './components/Social.jsx';
import { Footer } from './components/Footer.jsx';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Header />
    <Hero />
    <About />
    <Portfolio />
    <Social />
    <Footer />

  </StrictMode>
);
