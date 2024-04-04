import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from'./data/store';
import App from './App.jsx'
import Home from './Home.jsx'
import '../src/styles/index.css'
function Main() {
  return (
     <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/app" element={<App />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
     </Provider> 

  )
}
createRoot(document.getElementById('root')).render(<Main />);
