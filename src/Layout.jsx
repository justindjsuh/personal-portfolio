import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="container">
      <Header />
      <div className="body-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
