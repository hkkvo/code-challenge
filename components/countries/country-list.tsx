import { Box, Grid, Paper, Typography } from "@mui/material";
import { height, minHeight } from "@mui/system";
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
    <Paper sx={{ width: "320px", maxWidth: 320 }}>
      <Box
        style={{
          width: "320px",
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
            width={320}
            height={200}
          />
        ) : (
          ""
        )}
      </Box>
      <Box
        sx={{
          paddingLeft: 5,
          paddingRigth: 5,
          paddingBottom: "16px",
          minHeight: "180px",
        }}
      >
        <Grid container flexShrink={1}>
          <Grid
            item
            sx={{ paddingRigth: 5, marginTop: "16px", fontWeight: 700 }}
          >
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
