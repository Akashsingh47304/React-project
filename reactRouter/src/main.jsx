import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import Contact from './component/Contact/Contact.jsx'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path ="contact-us" element={<Contact />} />
    </Route>
  )
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
