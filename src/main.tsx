import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ClerkProvider } from '@clerk/clerk-react';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  throw new Error('Missing Publishable Key');
}

createRoot(document.getElementById('root')!).render(
  <ClerkProvider
    publishableKey={clerkPubKey}
    appearance={{
      layout: {
        logoImageUrl: 'public/fileGremlinLogo.png',
      },
    }}>
    <App />
  </ClerkProvider>,
);
