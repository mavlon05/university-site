import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from './Footer'


function Layout() { 
  return (
    <div>
      <header></header>
      <main className="pt-[100px]"><Outlet /> </main>
      <Navbar />
      <Footer/>
      
    </div>
  );
}

export default Layout;
