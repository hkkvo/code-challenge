import { Box, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";
import { ICountry } from "../../types/component";

interface ICountriesListCard {
  country: ICountry;
}

const CountriesListCard: FC<ICountriesListCard> = ({
  country,
}: ICountriesListCard) => {
  const { name, population, region, capital, flags } = country;

  return (
    <Paper sx={{ maxWidth: 300 }}>
      <Box
        style={{
          width: "300px",
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          paddingTop: "1px",
          paddingLeft: "1px",
          paddingRight: "1px",
        }}
      >
        {flags["svg"] ? (
          <Image
            src={flags["svg"]}
            objectFit="cover"
            layout="fixed"
            width={300}
            height={200}
          />
        ) : (
          ""
        )}
      </Box>
      <Box sx={{ paddingLeft: 5, paddingBottom: "16px" }}>
        <Grid container>
          <Grid item sx={{ width: 1, marginTop: "16px", fontWeight: 700 }}>
            <Typography>{name}</Typography>
          </Grid>
          <Grid item sx={{ width: 1, marginTop: "16px" }}>
            <Typography>
              population :{" "}
              <span style={{ fontSize: "12px" }}> {population}</span>{" "}
            </Typography>
          </Grid>
          <Grid item sx={{ width: 1 }}>
            <Typography>
              Region : <span style={{ fontSize: "12px" }}> {region} </span>
            </Typography>
          </Grid>
          <Grid item sx={{ width: 1 }}>
            <Typography>
              Capital : <span style={{ fontSize: "12px" }}> {capital}</span>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default CountriesListCard;
