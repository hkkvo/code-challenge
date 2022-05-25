import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CommonLayout from "../components/layouts/common-layout";
import { Page } from "../types/page";

const Home: Page = () => {
  return <h1>List of Countries</h1>;
};

Home.layout = CommonLayout;

export default Home;
