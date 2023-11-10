import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

import Home from './pages/Home.jsx';
import DeckPage from './pages/DeckPage.jsx';
import StudyPage from './pages/StudyPage.jsx';

import Login from './pages/auth/Login.jsx';
import Signup from './pages/auth/Signup.jsx';

import { AuthContextProvider } from './context/AuthContext.jsx'

// router
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter([
{
  path: '/',
  element: <App />,
  children: [
    {
      path: '/signup',
      element: <Signup />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/deck/:id',
      element: <DeckPage />
    },
    {
      path: '/study/:id',
      element: <StudyPage />,
    }
  ]
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>,
)
