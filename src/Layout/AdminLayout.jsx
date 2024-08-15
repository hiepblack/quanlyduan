import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <div className="row">
        <div className="col-2 border">
          <SideBar />
        </div>
        <div className="col-10 border">
          <Header />
          <div>
            <div>
              <Outlet />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
