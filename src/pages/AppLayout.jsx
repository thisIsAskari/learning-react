import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";
import Map from "../components/Map";
import User from "../components/User";

function AppLayout() {
  return (
    
    <div>
      <div className={styles.app}>
        <Sidebar />
        <Map />
        <User />
      </div>
    </div>
  );
}

export default AppLayout;
