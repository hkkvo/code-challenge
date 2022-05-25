import {
  GetServerSideProps,
  GetServerSidePropsContext,
  PreviewData,
} from "next";
import React, { FC } from "react";
import CommonLayout from "../../components/layouts/common-layout";
import { Page } from "../../types/page";
import axios from "axios";
import { ICountry } from "../../types/component";
import { CountryUtil } from "../../util/dto/country.dto";
import client from "../../util/data/index";
import { ParsedUrlQuery } from "querystring";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";
import Image from "next/image";

interface ICell {
  name: string;
  value: string;
}

const Cell: FC<ICell> = ({ name, value }: ICell) => {
  return (
    <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>
      {name} : <span style={{ fontSize: "12px" }}> {value}</span>{" "}
    </Typography>
  );
};

const CountryDetailPage: Page = (props) => {
  const router = useRouter();
  const country = props.country;

  const handleBack = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    router.push("/");
  };
  return (
    <Grid container justifyContent="center">
      <Grid item xs={10}>
        <Button
          color="primary"
          variant="contained"
          sx={{ textTransform: "capitalize" }}
          startIcon={<ArrowBackIcon />}
          onClick={handleBack}
          sx={{ marginTop: "48px", px: "24px" }}
        >
          Back
        </Button>
      </Grid>
      <Grid item xs={10} sm={5}>
        <Box
          sx={{
            width: { xs: "310px", sm: "600px" },
            height: { xs: "250px", sm: "450px" },
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            paddingTop: "1px",
            paddingLeft: "1px",
            paddingRight: "1px",
            marginTop: "96px",
            position: "relative",
          }}
        >
          {country.flags["svg"] ? (
            <Image
              src={country.flags["svg"]}
              objectFit="cover"
              layout="fill"
              style={{ position: "absolute", top: 0, left: 0 }}
            />
          ) : (
            ""
          )}
        </Box>
      </Grid>
      <Grid item xs={10} sm={5} container>
        <Grid item xs={12}>
          <Typography
            sx={{ marginTop: "132px", fontSize: "24px", fontWeight: 700 }}
          >
            {country.name.official}
          </Typography>
        </Grid>
        <Grid item xs={12} container>
          <Grid>
            <Cell name="population" value={country.population} />
          </Grid>
          <Grid></Grid>
        </Grid>
        <Grid item xs={12} container>
          Grid
        </Grid>
        <Grid item xs={12} container></Grid>
      </Grid>
    </Grid>
  );
};

CountryDetailPage.layout = CommonLayout;

export default CountryDetailPage;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  const countryName: any = context.params ? context.params["name"] : "";

  const country = await client.countries.getCountryByName(countryName ?? "");

  return {
    props: { country: country[0] },
  };
};
