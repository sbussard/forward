import React from 'react'
import ReactDOM from 'react-dom/client'
import Message from './Message'

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/:base64To/:base64From" element={<Message />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
