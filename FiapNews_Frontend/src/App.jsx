import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/navbar";
import { useEffect } from "react";
//import { Container } from "./pages/Home/Home";



function App() {
  useEffect(() => {
    const getScrollbarWidth = () => {
      return window.innerWidth - document.documentElement.clientWidth;
    };

    document.documentElement.style.setProperty(
      "--scrollbar-width",
      `${getScrollbarWidth()}px`
    );

    window.addEventListener("resize", () => {
      document.documentElement.style.setProperty(
        "--scrollbar-width",
        `${getScrollbarWidth()}px`
      );
    });

    return () => {
      window.removeEventListener("resize", getScrollbarWidth);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      
    </>
  );
}

export default App;
