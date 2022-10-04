import React, { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import userContext from "../userconxtext/Usercontext";
const LayoutMain = ({ children }) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://academy-products.herokuapp.com/api/user")
      .then((res) => res.json())
      .then((data) => setUser(data.data));
  }, []);

  return (
    <>
      <userContext.Provider value={user}>
        <Navbar />
        <div className="main-content">
          <Sidebar />
          {children}
        </div>
        <footer>
          <Footer />
        </footer>
      </userContext.Provider>
    </>
  );
};

export default LayoutMain;
