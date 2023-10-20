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
        path: "/addproducts",
        element: <AddProducts></AddProducts>
      },
      {
        path: "/mycart",
        element: <MyCart></MyCart>
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
        },
      }
      
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
