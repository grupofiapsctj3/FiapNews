import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import News from './pages/News/news.jsx';
import Videos from './pages/Video/videoNews.jsx';
import VideoRegistration from './pages/VideoRegistration/VideoRegistrarion.jsx';
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
        element: <Home  />,
      },
      {
        path: "/news/:id",
        element: <News />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/videos/:id",
        element: <Videos />,
      },
      {
        path: "/videosreg",
        element: <VideoRegistration />,
      },
      {
        path: "/newsreg",
        element: <NewsFormRestration />,
      }
    ]
   
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);