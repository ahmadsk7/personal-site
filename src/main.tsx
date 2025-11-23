import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './assets/favicon.ico'

// Force dark mode
document.documentElement.classList.add('dark');

// Handle GitHub Pages redirect for client-side routing
const pathSegmentsToKeep = 0;
const l = window.location;
if (l.search) {
  const search = l.search.slice(1);
  if (search.startsWith('/')) {
    const path = search
      .split('&')[0]
      .replace(/~and~/g, '&')
      .split('#')[0];
    window.history.replaceState(null, '', path + l.hash);
  }
}

createRoot(document.getElementById("root")!).render(<App />);
