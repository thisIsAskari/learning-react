import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("/app/form");
      }}
    >
      <h2>Map</h2>
      <p>Latitude: {lat}</p>
      <p>Longitude: {lng}</p>
      <button
        onClick={() => setSearchParams({ lat: "40.7128", lng: "-74.0060" })}
      >
        Set to New York City
      </button>
    </div>
  );
}

export default Map;
