import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import CityItem from "./CityItem";
import CountryItem from "./CountryItem";

function CountryList({ cities, isLoading }) {
  if (isLoading) {
    return <Spinner />;
  }

  if (cities.length === 0) {
    return (
      <Message className={styles.noCities} message="No cities added yet." />
    );
  }

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((c) => c.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return arr;
    }
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
