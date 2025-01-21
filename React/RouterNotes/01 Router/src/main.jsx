import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Home, NotFoundPage, Profile, Profiles} from "./pages/index"
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <NotFoundPage/>
  }, 

  {
    path: '/profiles',
    element: <Profiles/>,
    children: [
      {
        path: '/profiles/:profileId',
        element: <Profile/>
      }
    ]
  }, 

  {
    path : '/profile',
    element: <Profile/>
  }



])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
