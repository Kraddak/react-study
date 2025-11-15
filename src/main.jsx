import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ContextUnsplash } from "./unsplash-images/ContextUnsplash"
// remember npm run dev

ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextUnsplash>
        <App />
    </ContextUnsplash>
);
