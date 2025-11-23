import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './assets/favicon.ico'

// Force dark mode
document.documentElement.classList.add('dark');

createRoot(document.getElementById("root")!).render(<App />);
