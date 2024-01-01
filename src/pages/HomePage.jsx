import { useEffect, useState } from "react";
import { API_URL } from "../API_URL";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";

function HomePage() {
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/countries`)
      .then((response) => {
        setAllCountries(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>WikiCountries: Your Guide to the World</h1>
      <ListGroup>
        {allCountries.map((country, index) => (
          <ListGroup.Item key={index}>{country.name.common}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default HomePage;
