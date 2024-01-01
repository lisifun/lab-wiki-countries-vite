import axios from "axios";
import { useEffect } from "react";

function CountryDetails() {
  useEffect(() => {
    axios
      .get(`${API_URL}/countries/:alpha3Code`)
      .then((response) => {
        setSelectedCountry(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>Country Details</h1>
    </div>
  );
}

export default CountryDetails;
