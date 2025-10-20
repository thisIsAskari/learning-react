import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import styles from "./AppLayout.module.css";
import Map from "../components/Map";

function AppLayout() {
  return (
    <div>
      <div className={styles.app}>
        <Sidebar />
        <Map />
      </div>
    </div>
  );
}

export default AppLayout;
