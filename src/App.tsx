import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import { Upload } from 'lucide-react';
import MyFiles from './pages/MyFiles';
import Subscription from './pages/Subscription';
import Transaction from './pages/Transaction';
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={<Landing />} />

        {/* Dashboard Route */}
        <Route
          path="/dashboard"
          element={
            // fragment to protect routes that require sign in
            <>
              <SignedIn>
                <Dashboard />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />

        {/* Upload Route */}
        <Route
          path="/upload"
          element={
            // fragment to protect routes that require sign in
            <>
              <SignedIn>
                <Upload />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />

        {/* My Files Route */}
        <Route
          path="/my-files"
          element={
            // fragment to protect routes that require sign in
            <>
              <SignedIn>
                <MyFiles />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />

        {/* Subscriptions Route */}
        <Route
          path="/subscriptions"
          element={
            // fragment to protect routes that require sign in
            <>
              <SignedIn>
                <Subscription />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />

        {/* Transactions Route */}
        <Route
          path="/transactions"
          element={
            // fragment to protect routes that require sign in
            <>
              <SignedIn>
                <Transaction />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />

        {/* Wildcard Route */}
        <Route path="/*" element={<RedirectToSignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
