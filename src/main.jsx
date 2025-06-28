import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './Pages/Providers/AuthProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div>
        <RouterProvider router={router}>
        </RouterProvider>
        </div>
      </AuthProvider>

    </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
