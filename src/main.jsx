import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import AddProducts from './Components/AddProducts/AddProducts';
import MyCart from './Components/MyCart/MyCart';
import Home from './Components/Home/Home';
import ProductBasedBrand from './Components/ProductBasedBrand/ProductBasedBrand';
import AuthProvider from './AuthProvider/AuthProvider';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/addproduct",
        element: <AddProducts></AddProducts>
      },
      {
        path: "/cart/myCart",
        element: <MyCart></MyCart>,
        loader: () => fetch('http://localhost:5000/mycart')
      },

      {
        path: "/brand/:brandName",
        element: <ProductBasedBrand />,
        loader: ({ params }) => {
          console.log(params);
          console.log(params.brandName);
          return fetch(
            `http://localhost:5000/brand/${params.brandName}`
          );
        }
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      },


    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
