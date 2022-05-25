import React, { useEffect, useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CommonLayout from "../components/layouts/common-layout";
import { Page } from "../types/page";
import axios, { CancelToken } from "axios";
import { ICountry } from "../types/component";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import CountriesListCard from "../components/countries/country-list";
import { TextFields, TextFieldsOutlined } from "@mui/icons-material";
import { CountryUtil } from "../util/dto/country.dto";
const Home: Page = (props) => {
  const [listOfCountries, setListOfCountries] = useState<ICountry[]>([]);
  const [region, setRegion] = useState<string>("");
  let cancelToken: any;

  const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    //Check if there are any previous pending requests
    if (typeof cancelToken != typeof undefined) {
      cancelToken.cancel("Operation canceled due to new request.");
    }

    //Save the cancel token for the current request
    cancelToken = axios.CancelToken.source();

    const url =
      searchTerm === ""
        ? "https://restcountries.com/v3.1/all"
        : `https://restcountries.com/v3.1/name/${searchTerm}`;
    try {
      const listOfCountriesResponse = await axios.get(
        url,
        { cancelToken: cancelToken.token } //Pass the cancel token to the current request
      );

      const listOfCountries = listOfCountriesResponse.data;

      const countries: ICountry[] =
        CountryUtil.getTransformedCountryArrayt(listOfCountries);

      setListOfCountries(countries);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;

    const url = `https://restcountries.com/v3.1/region/${searchTerm}`;
    try {
      const listOfCountriesResponse = await axios.get(url);
      const listOfCountries = listOfCountriesResponse.data;
      const countries: ICountry[] =
        CountryUtil.getTransformedCountryArrayt(listOfCountries);

      setListOfCountries(countries);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setListOfCountries(props.countries);
  }, []);

  return (
    <Grid alignItems="center" justifyContent="center" container gap={12}>
      <Grid item xs={10} container>
        <Grid item xs={5} sm={3}>
          <TextField
            id="outlined-basic"
            type="text"
            name="search"
            variant="outlined"
            onChange={handleOnChange}
            placeholder="Search by Country"
          />
        </Grid>
        <Grid item xs></Grid>
        <Grid item xs={5} sm={2}>
          <FormControl fullWidth>
            <Select
              value={region}
              placeholder="Filter by Region"
              onChange={handleSelectChange}
              defaultValue="Filter by Region"
            >
              <MenuItem value="africa">Africa</MenuItem>
              <MenuItem value="america">America</MenuItem>
              <MenuItem value="asia">Asia</MenuItem>
              <MenuItem value="europe">Europe</MenuItem>
              <MenuItem value="oceania">Oceania</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {listOfCountries.map((country: ICountry, index: number) => (
        <Grid item xs={10} sm={3} md={2}>
          <CountriesListCard country={country} />
        </Grid>
      ))}
    </Grid>
  );
};

Home.layout = CommonLayout;

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  // ...

  const listOfCountriesResponse = await axios.get(
    "https://restcountries.com/v3.1/all"
  );

  const listOfCountries = await listOfCountriesResponse.data;

  let countries: ICountry[] =
    CountryUtil.getTransformedCountryArrayt(listOfCountries);
  return {
    props: { countries },
  };
};
