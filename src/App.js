import React from 'react';
import Navbar from './components/Navbar'; // Yolu kendi projenize göre ayarlayın
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      {/* Ana içerik alanı */}
      <div style={{ minHeight: '80vh', padding: '20px', marginBottom: '50px' }}>
        <h1>Welcome to the Blog App!</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App