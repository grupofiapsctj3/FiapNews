import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import News from './pages/News/news.jsx'
import GlobalStyle from './Globals/GlobalStyle.jsx';
import Error from './pages/Error/Error.jsx';
import NewsFormRestration from './pages/Registration/newsRegistration.jsx';
import Home from './pages/Home/Home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <NewsFormRestration  />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ]
   
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);