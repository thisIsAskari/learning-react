import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import { useCitiesContext } from "../contexts/CitiesContext";

function CityList() {
  const { cities, isLoading } = useCitiesContext();

  if (isLoading) {
    return <Spinner />;
  }

  if (cities.length === 0) {
    return (
      <Message className={styles.noCities} message="No cities added yet." />
    );
  }

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}

export default CityList;
