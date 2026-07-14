import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./public/login"
import ThemeToggle from "./components/theme-toggle"
import Footer from "./components/footer"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectedRoute from "./auth-pages/layout/protected-route";
import Dashboard from "./auth-pages/dashboard/Dashboard";
import { TooltipProvider } from './components/ui/tooltip';
import { Toaster as Sonner, Toaster } from "./components/ui/sonner"; 
import DefaultLayout from "./auth-pages/layout/DefaultLayout";
import AppContextProvider from "./context/AppContext";
import { setupAxiosInterceptors } from "./utils/axiosConfig";
import { useEffect } from "react";
import Home from "./public/home/Home";
import SignUp from "./public/sign-up";
import TradeZone from "./public/trade-zone";

function App() {

  
  const queryClient = new QueryClient();
  
  useEffect(() => {
      setupAxiosInterceptors(() => {
          localStorage.removeItem('auth_token');
          localStorage.removeItem('auth_user');
          window.location.href = '/';
          alert('Your session has expired. Please log in again.');
      });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <ThemeToggle />
        <div className='w-full'>
          <TooltipProvider>
            <Router>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<SignUp />} />
                <Route exact path="/trade-zone" element={<TradeZone />} />
                <Route element={<ProtectedRoute><DefaultLayout /></ProtectedRoute>}>
                    <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                  </Route>
              </Routes>
            </Router>
            <Sonner position="top-right" />
          </TooltipProvider>
          <Footer />
        </div>
      </AppContextProvider>
    </QueryClientProvider>
  )
}

export default App
