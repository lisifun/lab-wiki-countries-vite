import { useEffect, useState } from "react";
import { API_URL } from "../API_URL";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

function HomePage() {
  const [allCountries, setAllCountries] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/countries`)
      .then((response) => {
        setAllCountries(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>WikiCountries: Your Guide to the World</h1>
      <ListGroup>
        {allCountries.map((country, index) => (
          <Link
            to={`/${country.alpha3Code}`}
            style={{ textDecoration: "none" }}
            key={index}
          >
            <ListGroup.Item
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                style={{ width: "50px" }}
              />
              <b>{country.name.official}</b>
              {country.name.common}
            </ListGroup.Item>
          </Link>
        ))}
      </ListGroup>
    </div>
  );
}

export default HomePage;
