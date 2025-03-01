import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './routes/Home/Home';
import Register from './routes/Register/Register';
import Login from './routes/Login/Login';
import {Layout, RequiredAdmin, RequiredAuthentication } from './components/Layout/Layout';

import Error from './components/ErrorPage/Error';
import MangageAddress from './routes/MangageAddress/MangageAddress';
import ProfilePage from './routes/ProfilePage/ProfilePage';
import Profile from './routes/ProfileLayout/ProfileLayout';
import EditPage from './routes/EditPage/EditPage';

import AdminHomepage from './Admin/AdminHomepage/AdminHomepage';
import Shop from './routes/Shop/Shop';


const route = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    errorElement:<Error/>,
    children :[
      {
        path:"/",
        element: <Home/>
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: '/login',
        element :<Login/>
      },
      {
        path: "/shop",
        element: <Shop/>
      }
    ]
  
  },
  {
    path: "/admin",
    element: <RequiredAdmin/>,
    errorElement: <Error/>,
    children: [
      {
        path: "",
        element: <AdminHomepage/>
      }
    ]
  },
  {
    path :"/",
    element: <RequiredAuthentication/>,
    errorElement: <Error/>,
    children: [    
           
      {
        path: "/profile/:userId",
        element: <Profile/>,
        children :[
          {
            path:"",
            element: <ProfilePage/>
          },
          {
            path:"manage_address",
            element: <MangageAddress/>
          },
          {
            path:"edit",
            element: <EditPage/>
          }
        ] 
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={route}/>
  );
};

export default App;