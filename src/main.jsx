import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Router/Router.jsx';
import {  HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <HelmetProvider> <div className='max-w-[1200px] mx-auto'>
      <RouterProvider router={router} />
    </div></HelmetProvider>
  </React.StrictMode>,
)
