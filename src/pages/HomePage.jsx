import { useEffect, useState } from "react";
import { API_URL } from "../API_URL";
import axios from "axios";

function HomePage() {
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/countries`)
      .then((response) => {
        console.log(response.data);
        setAllCountries(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>WikiCountries: Your Guide to the World</h1>
    </div>
  );
}

export default HomePage;
