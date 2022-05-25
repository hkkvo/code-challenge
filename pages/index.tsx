import React, { useEffect, useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CommonLayout from "../components/layouts/common-layout";
import { Page } from "../types/page";
import axios from "axios";
import { ICountry } from "../types/component";
import { Grid } from "@mui/material";
import CountriesListCard from "../components/countries/country-list";
const Home: Page = (props) => {
  const [listOfCountries, setListOfCountries] = useState<ICountry[]>([]);

  useEffect(() => {
    setListOfCountries(props.countries);
  }, [listOfCountries]);

  return (
    <Grid
      justifyItems="center"
      alignItems="center"
      justifyContent="center"
      container
      gap={10}
    >
      {listOfCountries.map((country: ICountry, index: number) => (
        <Grid item>
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

  let countries: ICountry[] = [];

  listOfCountries.forEach((country) => {
    const individualCountry: ICountry = {};

    individualCountry.name = country?.name?.official ?? "";
    individualCountry.nativeName = country?.name?.common ?? "";
    individualCountry.borderCountries = country?.borders ?? "";
    individualCountry.flags = country?.flags ?? "";
    individualCountry.currencies = country?.currencies ?? "";
    individualCountry.languages = country?.languages ?? "";
    individualCountry.capital = country?.capital ?? "";
    individualCountry.population = country?.population ?? "";
    individualCountry.region = country?.region ?? "";
    individualCountry.subRegion = country?.subregion ?? "";
    individualCountry.topLevelDomain = country?.capital ?? "";
    countries.push(individualCountry);
  });

  return {
    props: { countries },
  };
};
